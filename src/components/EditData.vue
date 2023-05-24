<template>
  <div class="EditData">
  <v-app style="background: #FFFFFF">
    <v-main>
    <v-container
      class="pt-5"
    >
      <v-card class="wrapper" elevation="5" height="1000" width="830">
        <div>
          <p class="text-h5 font-weight-black pl-7 ma-5"><b>Form Edit Data Karbon</b></p>
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
                <v-list-subheader class="longitude pl-12">Latitude</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="Latitude"
                  label="" 
                  name="latitude"
                  placeholder="123.45678" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row> 

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="longitude pl-12">Longitude</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="Longitude"
                  label="" 
                  name="longitude"
                  placeholder="123.45678" 
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row> 

            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="namalokasi pl-12">Nama Lokasi</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="namaLoc"
                  label="" 
                  name="namaLoc"
                  placeholder="Ngampel, Gentungan, Mojogedang, Karanganyar, Jawa Tengah" 
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
                <v-list-subheader class="hst pl-12">HST</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-select v-model="hst"
                  :items="[0,1,2]"
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
                  density="compact"
                  variant="solo"
                  prepend-inner-icon="mdi-file-input"
                  name="citraNIR"
                  label="Input File"
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
                  density="compact"
                  variant="solo"
                  prepend-inner-icon="mdi-file-input"
                  name="citraRGB"
                  label="Input File"
                  accept="image/jpg, image/png, image/jpeg"
                  required>
                </v-file-input>
              </v-col>
            </v-row> 
         
            <v-row> 
              <v-col cols="4"> 
                <v-list-subheader class="karbonlahan pl-12">Karbon Tanah</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="karbonLahan"
                  label="" 
                  name="karbonLahan"
                  placeholder="12345"
                  density="compact"
                  required
                ></v-text-field> 
              </v-col> 
            </v-row> 

            <v-row> 
              <v-col cols="4">
                <v-list-subheader class="karbonkomoditas pl-12">Karbon Tanaman</v-list-subheader> 
              </v-col> 
         
              <v-col cols="7"> 
                <v-text-field v-model="karbonKomoditas"
                  label="" 
                  name="karbonKomoditas"
                  placeholder="12345"
                  density="compact"
                  required 
                ></v-text-field> 
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

    import { useRouter } from "vue-router";
    import { v4 as uuidv4 } from 'uuid';
    import axios from "axios";
    // import { aws4Interceptor } from "aws4-axios";

    var uuid = uuidv4();

    console.log(uuid);

    // var apiKey = 'Iu1eDO2tLl8Xezi65PUGF98beAoEVjJ74Oq9U8WI';

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
          jenisKomoditas:'',
          hst:'',
          tanggalSampling:null,
          citraNIR:'',
          citraRGB:'',
          karbonLahan:'',
          karbonKomoditas:''
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
        submitForm: function(){
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
                            jenisKomoditas: this.jenisKomoditas,
                            hst: this.hst,
                            tanggalSampling: this.tanggalSampling,
                            citraNIR: this.citraNIR,
                            citraRGB: this.citraRGB,
                            karbonLahan: this.karbonLahan,
                            karbonKomoditas: this.karbonKomoditas,
                              
                    
                      
                  }).catch((err) => {
                      this.error = err.message;
        
                  }) .then(resp => {
                      console.log(resp.data); 
                      console.log(resp.status);
                      console.log(resp.statusText);
                      console.log(resp.headers);
                      console.log(resp.config);

        });
        },
        addPhoto: function(){
        }
      }
    };
    </script>
  <style>
    .btn { 
      background-color:#197AFF; 
      font-size: 12px; 
    }
  </style>