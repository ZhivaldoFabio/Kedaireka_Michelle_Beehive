<template>
    <v-card
      class="mx-auto"
      width="370"
      elevation="2"
    >
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">
          <v-list-item prepend-icon="mdi-filter" value="filter" class="font">Filter</v-list-item>
        </div>
        <v-table density="compact">
          <tr>
              <th class="text-left">
                  <v-select
                      :items="months"
                      label="Bulan"
                      outlined
                      variant="solo"
                      density="compact"
                   
                  ></v-select>
              </th>
              <th class="text-left">
                  <v-select
                      :items="commodities"
                      label="Komoditas"
                      outlined
                      variant="solo" 
                      density="compact"
                  ></v-select>
              </th>
          </tr>
      </v-table>
      </div>
    </v-card-item>
      <v-card-actions >
        <v-btn
        class="btn"
        text
        color="white">
        Terapkan
        </v-btn>
      </v-card-actions>
      <v-card
      class="mx-auto"
      max-width="370"
    >
      <v-card-item>
            <div class="text-h6">
                <p class="font">Pilih Periode Masa Tanam</p>
                <p class="periode">Ket: HST (Hari Setelah Tanam)</p>
            </div>
        <div class="periode">
          <v-btn-toggle
            v-model="toggle"
            variant="outlined"
            color="primary"
            mandatory
            divided
          >
            <v-btn class="periode">Sebelum<br>Tanam</v-btn>
            <v-btn class="periode">HST<br>Awal</v-btn>
            <v-btn class="periode">HST<br>Tengah</v-btn>
            <v-btn class="periode">HST<br>Akhir</v-btn>
          </v-btn-toggle>
        </div>
      </v-card-item>
      <v-card-actions>
        <v-btn
          text
          class="btn"
          color="white"
        >
          Terapkan
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      months:[
         'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
      ],
      commodities:[
          'Padi', 'Kentang', 'Cabai'
      ],
     
    }
  },
}
</script>
<style>
.periode{
  font-size: 10px;
}
.btn{
  background-color:#197AFF;
  font-size: 10px;
}
.font{
  font-size: 16px;
}
</style>
