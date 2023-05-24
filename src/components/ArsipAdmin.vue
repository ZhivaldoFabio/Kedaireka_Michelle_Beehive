<template>
  <div class="Arsip">
    <v-app>
      <v-main>
        <div class="title">
          <p class="text-h4 font-weight-bold">Arsip Data Nilai Karbon</p>
        </div>
        <div class="add">
          <v-btn prepend-icon="mdi-filter"  color="info">
            filters
          </v-btn>
        </div>
        <v-card class="ma-5">
          <v-card-item >
              <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-left text-subtitle-1 font-weight-medium">
                        No
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium">
                        Lokasi
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium">
                        Keterangan
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium">
                        Bulan
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium">
                        Tahun
                      </th>
                      <th class="text-left text-subtitle-1 font-weight-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in data"
                      :key="item.name"
                    >
                  <td>{{ item.no}}</td>  
                  <td>{{ item.lokasi }}</td>
                  <td>{{ item.ket }}</td>
                  <td>{{ item.bulan }}</td>
                  <td>{{ item.tahun }}</td>
                  
                  <td>
                    <v-btn
                    variant="flat"
                    color="#2ABFFF"
                    class="btn"
                    >
                    LIHAT
                  </v-btn>
                </td>
                  </tr>
                  </tbody>
                </v-table>
          </v-card-item>
      </v-card> 
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="1"
          :total-visible="1"
          rounded="circle"
        ></v-pagination>
      </div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          page:1,
          data: [
            {
              no:1,
              lokasi:'Klaten, Delanggu',
              ket:'Sanggar Rojolele Delanggu',
              bulan:'Oktober',
              tahun:'2022',
            },
            {
              no:2,
              lokasi:'Magelang',
              ket:'Agro Lestari Merbabu',
              bulan:'Oktober',
              tahun:'2022',
            },
            {
              no:3,
              lokasi:'Karanganyar, Mojogedang',
              ket:'Tani Mulyo 1',
              bulan:'Oktober',
              tahun:'2022',
            },
          ],
        }
      },
    }
  </script>
<style>
  .add{
    padding-left: 2%;
  }
  .btn{
    margin: 5%;
  }
  .title{
    padding-top: 5%;
    padding-left: 2%;
    padding-bottom: 2%;
  }
  
</style>