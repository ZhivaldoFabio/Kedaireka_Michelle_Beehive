<template>
  <div class="KalkulatorComponent">
    <v-app>
      <v-main>
        <v-container align="center">
          <v-col cols="10" class="pa-0 my-8">
            <v-card class="text-center" color="#134280" width="730" height="250" elevation="20">
              <div class="pt-7">
                <h1 style="color: white;">Kalkulator Karbon </h1>
              </div>
              <v-col>
                <h4 align="left" style="color: white;">Masukkan Foto Citra NIR: </h4>
                <v-file-input v-model="citraRGB" 
                class="input font" 
                prepend-icon="mdi-camera" 
                variant="solo" 
                name="citraRGB"
                label="Unggah File" @change="getImage($event)" 
                accept="image/jpg, image/png, image/jpeg"
                required></v-file-input>
                  <v-btn class="btn" color="blue" @click="submitForm">
                    Unggah
                  </v-btn>
              </v-col>
            </v-card>
          </v-col>
        </v-container>
        <v-container align="center">
          <v-col cols="10">
            <v-card class="text-center" color="#134280" width="730" height="250" elevation="20">
              <div class="pt-7">
                <h1 style="color: white;">Hasil Estimasi Karbon</h1>
              </div>
              <div class="result" style="margin:auto: center">
                <h3 class="font">Prediksi Nilai Karbon Tanah : </h3>
                <h2 style="color:red">{{ text }}</h2>
                <br>
                <v-btn class="btn" @click="deleteResult" color="red">
                  Hapus
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-container>
        <v-navigation-drawer v-model="drawer"
        width="300"
        permanent
        location="right"
        >
        <div>
          <h3 class="ma-5" style="color: #134280;">
            <v-icon icon="mdi-help-circle"></v-icon>
            Bantuan
          </h3>
        </div>
        <v-expansion-panels class="pa-2" variant="popout"> 
          <v-expansion-panel
            title="Deskripsi Kalkulator Karbon"
            text="Kalkulator Karbon merupakan fitur yang dapat digunakan untuk melakukan perhitungan prediksi nilai karbon berdasar foto citra NIR"
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Cara Penggunaan"
            text="1) Klik pada form unggah file atau klik pada icon kamera.
            2) Pilih foto citra NIR dengan ekstensi .jpg/.jpeg/.png. 
            3) Klik tombol unggah. 
            4) Tunggu hingga hasil prediksi nilai karbon muncul pada form Hasil Estimasi Karbon."
          >
          </v-expansion-panel>
          <v-expansion-panel
            title="Proses perhitungan kalkulator karbon"
            text="Perhitungan dilakukan oleh sistem yang telah dirancang dengan kemampuan machine learning untuk menghitung piksel dari citra NIR yang diunggah oleh pengguna "
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-navigation-drawer>
      </v-main>
    </v-app>
  </div>

</template>
<script>
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

var uuid = uuidv4();
export default {
  data: function () {
    return {
      items: {
        id: '',
        kalku: ''
      },
      text: sessionStorage.getItem('carbon_tanah')
    }


  },
  methods: {
    getImage: function (event) {
      this.kalku = event.target.files[0]
    },

    submitForm: async function () {


      this.id = String(uuid)
      let kalkuImage = await this.readBinary(this.kalku)
      const url = 'https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/kalkulator-isai/' + this.id + '.png';
      const urlCalcu = 'https://sk695s0owe.execute-api.us-east-1.amazonaws.com/dev/kalkuisai/' + this.id + '.png';

      let bytes = new Uint8Array(kalkuImage.length);

      for (let x = 0; x < kalkuImage.length; x++) {
        bytes[x] = kalkuImage.charCodeAt(x);
      }
      const contentType = 'image/png';
      let file = new Blob([bytes], { type: contentType });
      await axios.post(url, file, { headers: { 'Content-Type': 'image/png' } })

      setTimeout(function () {
        axios.get(urlCalcu)
          .then((resp) => {
            // console.log(resp.data)
            sessionStorage.setItem('carbon_tanah', resp.data.body.carbon_tanah);
            location.reload();

          });
      }, 500)
    },
    readBinary: function (file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function () {
          resolve(reader.result)
        }
        reader.onerror = reject
        reader.readAsBinaryString(file)
      })
    },
    deleteResult() {
      sessionStorage.clear();
      location.reload();
    }
  }
}
</script>
  
<style>
.font{
  color: white;
}
.btn { 
  background-color:#134280; 
  font-size: 12px; 
}
</style>
