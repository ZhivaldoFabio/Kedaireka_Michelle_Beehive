<template>
  <div class="TambahData">
  <v-app style="background: #FFFFFF">
    <div>
      <v-btn flat color="#c9c9c9" class="kembali" @click="$router.push('AdminTable')" style="float :left" prepend-icon="mdi-keyboard-backspace" >Kembali</v-btn>
    </div>
    <v-main>
    <v-container
      class="ma-5"
    >    
      <v-card class="wrapper" elevation="5" height="1100" width="830">
        <div>
          <h2 class="pl-7 ma-5"><b>Form Tambah Data Karbon</b></h2>
        </div> 
          <v-container fluid> 
            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="kode pl-12">Kode</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="kodeSample"
                  label=""
                  name="kodeSample"
                  placeholder="AB1" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row>

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="tanggalinput pl-12">Tanggal Input Data</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <div>
                  <Datepicker v-model="tanggalAdd" name="tanggalAdd" :enableTimePicker="false"></Datepicker>
                </div>
              </v-col> 
            </v-row> 

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="longitude pl-12">Koordinat Latitude</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="Latitude"
                  label="" 
                  name="latitude"
                  placeholder="-7.192182" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row> 

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="longitude pl-12">Koordinat Longitude</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="Longitude"
                  label="" 
                  name="longitude"
                  placeholder="110.292882" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row> 

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="namalokasi pl-12">Nama Lahan per Siklus</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="namaLoc"
                  label="" 
                  name="namaLoc"
                  placeholder="Lahan Kebumen Siklus 1" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row>

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="detaillokasi pl-12">Nama Gapoktan</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="detailLoc"
                  label="" 
                  name="detailLoc"
                  placeholder="Sanggar Maju Jaya" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row>

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="jeniskomoditas pl-12">Jenis Komoditas</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="jenisKomoditas"
                  label="" 
                  name="jenisKomoditas"
                  placeholder="Cabai" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row> 
         
            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="hst pl-12">Hari Setelah Tanam (HST)</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-select v-model="hst"
                  :items="['Awal', 'Tengah', 'Akhir']"
                  name="hst"
                  label="" 
                  placeholder="0" 
                  density="compact"
                  required
                ></v-select> 
              </v-col> 
            </v-row> 
         
            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="tanggal pl-12">Tanggal Pengambilan Sample</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <div>
                  <Datepicker v-model="tanggalSampling" name="tanggalSampling" :enableTimePicker="false"></Datepicker>
                </div>
              </v-col> 
            </v-row> 
            
            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="fotocitranir pl-12">Foto Citra NIR</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-file-input v-model="citraNIR"
                  @change="gambarNIR($event)"
                  type="file"
                  density="compact"
                  variant="solo"
                  prepend-inner-icon="mdi-file-input"
                  name="citraNIR"
                  label="Unggah File"
                  accept="image/jpg, image/png, image/jpeg"
                  required>
                </v-file-input>
              </v-col>
            </v-row> 
               
            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="fotocitrargb pl-12">Foto Citra RGB</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-file-input v-model="citraRGB"
                  @change="gambarRGB($event)"
                  type="file"
                  density="compact"
                  variant="solo"
                  prepend-inner-icon="mdi-file-input"
                  name="citraRGB"
                  label="Unggah File"
                  accept="image/jpg, image/png, image/jpeg"
                  required>
                </v-file-input>
              </v-col>
            </v-row> 
         
            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="karbonlahan pl-12">Karbon Tanah</v-list-subheader> 
              </v-col> 
         
              <v-col cols="6"> 
                <v-text-field v-model="karbonLahan"
                  label="" 
                  name="karbonLahan"
                  placeholder="0.25"
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 

              <v-col cols="2"> 
                <v-list-subheader class="gramTanah">gram</v-list-subheader> 
              </v-col> 
            </v-row> 

            <v-row> 
              <v-col cols="4">
                <v-list-subheader class="karbonkomoditas pl-12">Karbon Tanaman</v-list-subheader> 
              </v-col> 
         
              <v-col cols="6"> 
                <v-text-field v-model="karbonKomoditas"
                  label="" 
                  name="karbonKomoditas"
                  placeholder="0.20"
                  density="compact"
                  required 
                ></v-text-field> 
              </v-col> 

              <v-col cols="2"> 
                <v-list-subheader class="gramTanaman">gram</v-list-subheader> 
              </v-col> 
            </v-row> 
          </v-container> 
          
          <v-row>
            <v-card-actions @click="submitForm" class="simpan pl-16">
                <v-btn
                  text 
                  class="btn" 
                  color="white" 
                  @click="$router.push('/AdminTable')"
                > 
                  Simpan
                </v-btn> 
              </v-card-actions>
          </v-row>
      </v-card>
    </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import Swal from 'sweetalert2';
    import { useRouter } from "vue-router";
    import { v4 as uuidv4 } from 'uuid';
    import axios from "axios";

    var uuid = uuidv4();

    console.log(uuid);


    export default {
      components: { Datepicker },
      data: function(){
        return {
          id:null,
          kodeSample:'',
          tanggalAdd:null,
          Latitude:'',
          Longitude:'',
          namaLoc:'',
          detailLoc:'',
          jenisKomoditas:'',
          hst:'',
          tanggalSampling:null,
          citraNIR:'',
          citraRGB:'',
          karbonLahan:'',
          karbonKomoditas:'',
          by:'admin',
        }
      },
      setup() {
        const router = useRouter();
        const logout = () => {
          localStorage.setItem("authenticated", false);
          router.push("/admin");
        };
        return { logout };
      },
      methods:{
        gambarNIR: function(event) {
          this.citraNIR = event.target.files[0]
        },
        gambarRGB: function(event) {
          this.citraRGB = event.target.files[0]
        },
        submitForm:async function(){
          // console.log(this.valid);
          this.id = String(uuid);
          console.log(this.id);
        
          axios
                  .post('https://joofgy1sya.execute-api.us-east-1.amazonaws.com/dev/',{
                    // headers: {
                    //     header
                    // }, 
                    
                            id: this.id,
                            kodeSample: this.kodeSample,
                            tanggalAdd: this.tanggalAdd,
                            Latitude: this.Latitude,
                            Longitude: this.Longitude,
                            namaLoc: this.namaLoc,
                            detailLoc: this.detailLoc,
                            jenisKomoditas: this.jenisKomoditas,
                            hst: this.hst,
                            tanggalSampling: this.tanggalSampling,
                            citraNIR: this.citraNIR,
                            citraRGB: this.citraRGB,
                            karbonLahan: this.karbonLahan,
                            karbonKomoditas: this.karbonKomoditas,
                            by: this.by,
                      
                  }).catch((err) => {
                      this.error = err.message;
        
                  }) .then(resp => {
                      console.log(resp.data); 
                      console.log(resp.status);
                      console.log(resp.statusText);
                      console.log(resp.headers);
                      console.log(resp.config);

                  })

                  // NIR
                  let nirBinary = await this.readBinary(this.citraNIR)
                  const nirUrl = 'https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/kelompok1-nir/'+this.id+'.png'; 
                  let nirBytes = new Uint8Array(nirBinary.length);
                      for (let x = 0; x < nirBinary.length; x++) {
                          nirBytes[x] = nirBinary.charCodeAt(x);
                      }
                  const contentType = 'image/png';
                  let nirFile = new Blob([nirBytes], {type: contentType});
                  axios.post(nirUrl, nirFile, {headers:{'Content-Type':'image/png'}})

                  // RGB
                  let rgbBinary = await this.readBinary(this.citraRGB)
                  const rgbUrl = 'https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/kelompok1-rgb/'+this.id+'.png';
                  let rgbBytes = new Uint8Array(rgbBinary.length);
                    for (let i = 0; i < rgbBinary.length; i++) {
                        rgbBytes[i] = rgbBinary.charCodeAt(i);
                    }

                  let rgbFile = new Blob([rgbBytes], {type: contentType});
                  axios.post(rgbUrl, rgbFile, {headers:{'Content-Type':'image/png'}});


          if(this.id == String(uuid)) {
            alert('Berhasil menambahkan data')
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Berhasil menambahkan data',
              showConfirmButton: false,
              timer: 1500
            })
            this.$router.push('/AdminTable');
          }else{
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Gagal menambahkan data'
            })
          }},
          readBinary:function(file){
            return new Promise((resolve, reject) => {
            let reader= new FileReader();
            reader.onload = function(){
            resolve(reader.result)
          }
            reader.onerror = reject
            reader.readAsBinaryString(file)
          })
        }
      }
    };
    </script>
  <style scoped>
    .btn { 
      background-color:#134280; 
      font-size: 12px; 
    }
    .kembali{
      margin-top: 2%;
      margin-left: 3%
    }
  </style>