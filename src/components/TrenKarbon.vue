<template>
  <div class="TrenKarbon">
    <v-app style="background: #134280" >
      <v-container class="pt-14" align="center" justify="center">
        <v-card class="wrapper" elevation="20" height="615" width="900">
          <h2 class="pt-5 ms-8">
            Perkembangan Tren Nilai Karbon Tanah
          </h2>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">
                  <v-select :items="tahun_lahan" v-model="tahun_lahan_pilih" label="Pilih Tahun" outlined variant="solo"
                    dense width="150"></v-select>
                </th>
                <th>
                  <v-card-actions @click="update_lahan" class="simpan pl-2">
                  </v-card-actions>
                </th>
              </tr>
            </thead>
          </v-table>
          <div>
            <canvas id="data-tren"></canvas>
          </div>
        </v-card>
      </v-container>
    </v-app>
  </div>

  <div class="TrenKarbon2">
    
      <v-app style="background: #134280">
        <v-container class="pt-14" align="center" justify="center">
          <v-card class="wrapper" elevation="20" height="615" width="900">
            <h2 class="pt-5 ms-8">
              Perkembangan Tren Nilai Karbon Tanaman
            </h2>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left">
                    <v-select :items="jenis_komoditas" v-model="jenis_komoditas_pilih" label="Pilih Komoditas" outlined
                      variant="solo" dense width="150"></v-select>
                  </th>
                  <th class="text-left">
                    <v-select :items="tahun_karbon" v-model="tahun_karbon_pilih" label="Pilih Tahun" outlined
                      variant="solo" dense width="150"></v-select>
                  </th>
                  <th>
                    <v-card-actions @click="update_karbon" class="simpan pl-2">
          
                    </v-card-actions>
                  </th>
                </tr>
              </thead>
            </v-table>
            <div>
              <canvas id="data-tren2"></canvas>
            </div>
          </v-card>
        </v-container>
      </v-app>

  </div>
</template>

<script>
import Chart from "chart.js";
import datatrenChartData from "../datatren/datatren.js";
import datatrenChartData2 from "../datatren/datatren2.js";
export default {
  /* eslint-disable */
  name: "datatren",
  data() {
    return {
      tahun_karbon: ["2022"],
      tahun_lahan: ["2022"],
      jenis_komoditas: new Set(),
      jenis_komoditas_pilih: "padi",
      tahun_karbon_pilih: "2022",
      tahun_lahan_pilih: "2022",
      data_all: null,
      chart_lahan: null,
      chart_karbon: null,
    };
  },
  mounted() {
    this.axios
      .get("https://joofgy1sya.execute-api.us-east-1.amazonaws.com/dev/")
      .then((response) => {
        this.data_all = {
          1: {},
          2: {},
          3: {},
          4: {},
          5: {},
          6: {},
          7: {},
          8: {},
          9: {},
          10: {},
          11: {},
          12: {},
        };

        var datadb = response.data.body;

        datadb.forEach((data) => {
          var bulan = parseInt(data.tanggalSampling.slice(5, 7));
          var komoditas = data.jenisKomoditas.toLowerCase();
          var kota = data.namaLoc.toLowerCase();
          var karbonKomoditas = parseFloat(data.karbonKomoditas);
          var karbonLahan = parseFloat(data.karbonLahan);
          this.jenis_komoditas.add(komoditas);

          if (typeof this.data_all[bulan][komoditas] === "undefined") {
            this.data_all[bulan][komoditas] = {
              [kota]: {
                karbon_komoditas: [karbonKomoditas],
                karbon_lahan: [karbonLahan],
              },
            };
          } else if (
            typeof this.data_all[bulan][komoditas][kota] === "undefined"
          ) {
            this.data_all[bulan][komoditas][kota] = {
              karbon_komoditas: [karbonKomoditas],
              karbon_lahan: [karbonLahan],
            };
          } else {
            this.data_all[bulan][komoditas][kota].karbon_komoditas.push(
              karbonKomoditas
            );
            this.data_all[bulan][komoditas][kota].karbon_lahan.push(
              karbonLahan
            );
          }
        });

        datatrenChartData2.data.datasets = this.convert_to_datakarbon(
          this.data_all
        );

        datatrenChartData.data.datasets = this.convert_to_datalahan(
          this.data_all
        );

        const ctx = document.getElementById("data-tren");
        const ctx2 = document.getElementById("data-tren2");

        this.chart_lahan = new Chart(ctx, datatrenChartData);
        this.chart_karbon = new Chart(ctx2, datatrenChartData2);
      });
  },
  methods: {
    convert_to_datakarbon(raw_data) {
      const new_data = [];
      for (const bulan in raw_data) {
        for (const komoditas in raw_data[bulan]) {
          if (komoditas === this.jenis_komoditas_pilih) {
            for (const kota in raw_data[bulan][komoditas]) {
              const found = new_data.find(
                (el) => el.label.toLowerCase() === kota.toLowerCase()
              );
              if (typeof found === "undefined") {
                const color =
                  "#" +
                  Math.floor(Math.random() * (0xffffff + 1))
                    .toString(16)
                    .padStart(6, "0");
                const temp = {
                  label: kota,
                  data: [
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                  ],
                  borderColor: color,
                  borderWidth: 3,
                  fill: false,
                };
                temp.data[bulan - 1] = this.rata_rata(
                  raw_data[bulan][komoditas][kota].karbon_komoditas
                );
                new_data.push(temp);
              } else {
                found.data[bulan - 1] = this.rata_rata(
                  raw_data[bulan][komoditas][kota].karbon_komoditas
                );
              }
            }
          }
        }
      }
      return new_data;
    },
    convert_to_datalahan(raw_data) {
      const new_data = [];
      for (const bulan in raw_data) {
        for (const komoditas in raw_data[bulan]) {
          for (const kota in raw_data[bulan][komoditas]) {
            const found = new_data.find(
              (el) => el.label.toLowerCase() === kota.toLowerCase()
            );
            if (typeof found === "undefined") {
              const color =
                "#" +
                Math.floor(Math.random() * (0xffffff + 1))
                  .toString(16)
                  .padStart(6, "0");
              const temp = {
                label: kota,
                data: [
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                ],
                borderColor: color,
                borderWidth: 3,
                fill: false,
              };
              temp.data[bulan - 1] =
                raw_data[bulan][komoditas][kota].karbon_lahan;
              new_data.push(temp);
            } else {
              if (typeof found.data[bulan - 1] === "object") {
                found.data[bulan - 1].concat(
                  raw_data[bulan][komoditas][kota].karbon_lahan
                );
              } else {
                found.data[bulan - 1] =
                  raw_data[bulan][komoditas][kota].karbon_lahan;
              }
            }
          }
        }
      }

      for (const kota in new_data) {
        for (const bulan in new_data[kota].data) {
          new_data[kota].data[bulan] = this.rata_rata(
            new_data[kota].data[bulan]
          );
        }
      }

      return new_data;
    },
    rata_rata(daftar_data) {
      const jumlah_data = daftar_data.length;
      var total = 0;
      for (const data in daftar_data) {
        total += daftar_data[data];
      }
      return total / jumlah_data;
    },
    update_karbon() {
      this.chart_karbon.data.datasets = this.convert_to_datakarbon(
        this.data_all
      );
      this.chart_karbon.update();
    },
  },
  watch: {
    jenis_komoditas_pilih: function (newData, oldData) {
      if (newData !== oldData) {
        this.update_karbon();
      }
    },
  },
};
</script>