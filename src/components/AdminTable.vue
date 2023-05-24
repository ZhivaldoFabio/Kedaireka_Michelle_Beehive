<template>
  <div class="AdminTable">
    <v-app>
      <v-main >
        <v-btn flat color="error" class="logout" @click="handleSignOut" style="float :right" v-if="isLoggedIn" >Keluar</v-btn>
        <div class="title">
          <h1>Data Nilai Karbon</h1>
        </div>
        <div class="add">
          <v-btn 
          prepend-icon="mdi-plus-box" 
          class="btn"
          @click="$router.push('TambahData')">
            Tambah Data
          </v-btn>
      
        </div>
        <v-card class="ma-5">
          <v-card>
              <v-table fixed-header height="800px" density="compact">
                  <thead >
                    <tr>
                      <th class="text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        No
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Kode Sampel
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Latitude
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Longitude
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Nama Lahan
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Gapoktan
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color:#597aa6;">
                        Komoditas
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        HST
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Tanggal Sampling
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Karbon Tanah (Gram)
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Karbon Tanaman (Gram)
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        created by
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium" style="background-color: #597aa6;">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item,index) in data"
                      :key="item.name"
                    > 
                  <td>{{ index+1 }}</td>
                  <td>{{ item.kodeSample }}</td>
                  <td>{{ item.Latitude }}</td>
                  <td>{{ item.Longitude }}</td>
                  <td>{{ item.namaLoc }}</td>
                  <td>{{ item.detailLoc }}</td>
                  <td>{{ item.jenisKomoditas }}</td>
                  <td>{{ item.hst }}</td>
                  <td>{{ item.tanggalSampling }}</td>
                  <td>{{ item.karbonLahan }}</td>
                  <td>{{ item.karbonKomoditas }}</td>
                  <td>{{ item.by }}</td>
                  <td>
                  
                  <v-tooltip text="Delete" location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn 
                        color="error"
                        icon="mdi-delete"
                        size="small"
                        v-bind="props"
                        @click="del(item.id,item.kodeSample)">
                      </v-btn>
                    </template>
                  </v-tooltip>
                </td>
                  </tr>
                  </tbody>
                </v-table>
          </v-card>
        </v-card> 
      </v-main>
      
    </v-app>
  </div>
</template>
<script setup>
import { onMounted, ref} from "vue";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from "@/router";
const isLoggedIn = ref(false);
let auth;
onMounted(() =>{
  auth = getAuth();
  onAuthStateChanged(auth,(user) =>{
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }

  });
});
const handleSignOut = () => {
  signOut(auth).then(()=>{
    router.push("/LoginAdmin");
  })
};
</script>

<script>
  import axios from 'axios';
    export default {
      props:{
        dataDt:{
          
        }
      },
      data () {
        return {
          data: undefined
        }
      },
      methods:{
        del: function (id,kodeSample) {
          this.id = id;
          this.kodeSample = kodeSample;
    
          console.log(this.id);
          console.log(this.kodeSample);
         if(window.confirm("Yakin ingin menghapus data?")){
          axios
              .post('https://joofgy1sya.execute-api.us-east-1.amazonaws.com/dev/delete', {
                  id:this.id,
                  kodeSample:this.kodeSample, 
            }).catch((err) => {
              this.error = err.message;
              console.log(this.error)
            }).then((resp) => {
              console.log(resp.data),
              location.reload();
            })  
         } else{
          location.reload();
         }
        }
      },
      computed (){
      },
      mounted(){ //read
        
        axios.get('https://joofgy1sya.execute-api.us-east-1.amazonaws.com/dev/')
        .then((response)=>{
          this.data = response.data.body;
          
        })
      },
    }
  </script>

  <style scoped>
  .add{
    padding-left: 2%;
  }
  .btn{
    background-color:#134280;
    font-size: 12px; 
    color: white;
  }
  .logout{
    margin: 3%;
  }
  .title{
    padding-top: 5%;
    padding-left: 2%;
    padding-bottom: 2%;
  }
  
</style>