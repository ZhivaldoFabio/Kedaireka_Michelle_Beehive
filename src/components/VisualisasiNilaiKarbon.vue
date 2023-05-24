<template>
  <my-component ref="childref"></my-component>
    <div class="Visualisasi" @click="showDetails()">
        <v-app style="background: #A3E0F3;">
        <v-container 
        class="pt-14">
      <v-card class="wrapper" elevation="20" height="615" width="900">
      <p class="text-h5 font-weight-bold pt-5 ms-8 ">Visualisasi Nilai Karbon
      </p>
      <p class="text-h5 font-weight-bold ms-8 ">Komoditas : padi</p>
    <div>
      <canvas id="data-tren"></canvas>
    </div>     
      </v-card>
    </v-container>
    </v-app>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js'
  import dataGrafik from '../datatren/grafik.js'
  export default {
  /* eslint-disable */
  name: 'DataGrafik',
  data() {
    return {
      showModal:false,
      drawer:true,
      periode:[
          'Masa Tanam Awal', 'Masa Tanam Tengah', 'Masa Tanam Akhir',
        ],
      years:[
          '2022'
        ],
      dataGrafik: dataGrafik
    }
  },
    mounted() {
    const ctx = document.getElementById('data-tren');
    new Chart(ctx, this.dataGrafik);
  },
  methods:{
       showDetails(){
           this.showModal = true;
       }
    }
  }
  </script>
  