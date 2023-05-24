<template>
  <div>
    <v-list-item-content>
      <br />
      <v-list-item>
        <h2><strong>Kalkulator Karbon,</strong> <br/>Hitung Karbon di Foto Anda!</h2>
      </v-list-item>
      <br>
    </v-list-item-content>
  </div>
  <v-container>
    <div id="con">
      <v-form v-model="valid" >
        <v-container>
          <v-row class="row">
            <v-row class="row">
              <v-col style="width: 800px;">
                <v-file-input 
                  v-model="kalku"
                  class="input"
                  prepend-icon="mdi-camera"
                  name="kalku"
                  label="Foto Tanaman"
                  variant="filled"
                  @change="getImage($event)"
                  accept="image/jpg, image/png, image/jpeg"
                  required
                ></v-file-input>
              </v-col> 
            </v-row>
          </v-row>
        </v-container>
      </v-form>
      <v-btn class="mr-4" @click="submitForm" color="green-darken-4" >
        submit
      </v-btn>
    </div>
    <br>


    <div class="result" style="margin:auto: center">

          <h3>Karbon Tanah</h3>
          <h2  style="color:brown">{{text}}</h2>
          <!-- <br>
          <v-btn class="mr-4" @click="deleteResult" color="green-darken-4" >
            delete
          </v-btn> -->
    </div>
  </v-container>
  
  
  
</template>


<script>
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

var uuid = uuidv4();
export default{
  data: function(){
    return {
      items:{
        id:'',
      kalku:''
      },
      text:sessionStorage.getItem('carbon_tanah')
    }

    
  },
  methods:{
          getImage:function(event){
            this.kalku = event.target.files[0]
          },

          submitForm: async function(){
            

            this.id = String(uuid)
            let kalkuImage = await this.readBinary(this.kalku)
            const url= 'https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/kalkulator-isai/'+this.id+'.png';
            const urlCalcu = 'https://joofgy1sya.execute-api.us-east-1.amazonaws.com/dev/calcu/'+this.id+'.png';

            let bytes = new Uint8Array(kalkuImage.length);

              for (let x=0; x < kalkuImage.length; x++) {
                  bytes[x] = kalkuImage.charCodeAt(x);
              }
              const contentType = 'image/png';
              let file= new Blob([bytes], {type: contentType});
              await axios.post(url,file,{headers:{'Content-Type':'image/png'}})

              setTimeout(function () {
                  axios.get(urlCalcu)
                  .then((resp) => {
                  // console.log(resp.data)
                  sessionStorage.setItem('carbon_tanah', resp.data.body.carbon_tanah);
                  location.reload();
                  
                  });
                  }, 500)

              setTimeout(function(){
                sessionStorage.removeItem('carbon_tanah');
              },500)

             
             
          },
          readBinary:function(file){
            return new Promise((resolve,reject)=>{
              let reader = new FileReader();
              reader.onload = function(){
                resolve(reader.result)
              }
              reader.onerror = reject
              reader.readAsBinaryString(file)
            })
          }



  }
}


</script>

<style>
#con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
