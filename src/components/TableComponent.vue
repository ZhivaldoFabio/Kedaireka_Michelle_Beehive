<template>
    <v-card class="ma-5">
        <v-card-item >
            <div class="text-h6 mb-1">
                Estimasi Nilai Karbon 
            </div>
            <div class="text-caption">last updated data : Februari 2022</div>
            <v-table>
                <thead>
                  <tr>
                    <th>
                    </th>
                    <th class="text-left text-subtitle-1 font-weight-medium">
                      Lahan
                    </th>
                    <th class="text-left text-subtitle-1 font-weight-medium">
                      Komoditas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in data"
                    :key="item.name"
                  >
                <td>{{ item.info}}</td>  
                <td>{{ item.lahan }}</td>
                <td>{{ item.komoditas }}</td>
                </tr>
                </tbody>
              </v-table>
        </v-card-item>
    </v-card> 
</template>
<script>
    export default {
      data () {
        return {
          data: [
            {
                info:'Nilai karbon',
                lahan: 100,
                komoditas: 150,
            },
            {
                info:'Luas lahan',
                lahan: '100 m2',
                komoditas: '100 m2',
            },
            {
                info:'Tingkat Kesuburan',
                lahan:'subur',
                komoditas:'subur',
            },
            {
                info:'Jenis komoditas',
                lahan: '',
                komoditas: 'padi',
            },
          ],
        }
      },
    }
  </script>