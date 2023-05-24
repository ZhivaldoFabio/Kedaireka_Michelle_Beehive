<template>
  <v-navigation-drawer v-model="drawer"
  
  width="308"
  permanent
  location="left"
  >
    <v-list-item>
      <router-link to="/">
        <v-img
        max-height="110"
        max-width="110"
        src="droneISAI-nobg.png"
        density="compact"
      ></v-img>
      </router-link>
    </v-list-item>

    <v-divider></v-divider>

    <v-container fluid>
    
    <div>
      <v-list
         density="compact"
         nav
         dense
       >
       <p class="text-subtitle-1 font-weight-medium"  style="color: #134280;">Menu</p>

       <router-link to="/" class=" menu">
        <v-list-item prepend-icon="mdi-home-variant" value="beranda">Beranda</v-list-item>
       </router-link>

       <router-link to="/map" class=" menu">
        <v-list-item prepend-icon="mdi-map-search" value="lokasi">Cari Lokasi</v-list-item>
      </router-link>
       <router-link to="/tren" class="tren; menu">
        <v-list-item prepend-icon="mdi-chart-bar" value="tren">Tren Nilai Karbon</v-list-item>
      </router-link>
      <router-link to="/kalkulator" class=" menu">
        <v-list-item prepend-icon="mdi-calculator-variant" value="kalkulator">Kalkulator Karbon</v-list-item>
      </router-link>
      
      <p class="text-subtitle-1 font-weight-medium"  style="color: #134280;">Bantuan</p>
      <router-link to="/tentang" class="tentang; menu">
        <v-list-item prepend-icon="mdi-help-circle-outline" value="tentang" density="compact">Tentang</v-list-item>
      </router-link>
      <router-link to="/Kontak"  class="kontak; menu">
        <v-list-item prepend-icon="mdi-phone-in-talk" value="kontak" density="compact">Kontak</v-list-item>
      </router-link>
      </v-list> 
    </div>
    </v-container>

      <template v-slot:append>
      <v-divider></v-divider>
      <v-list
      density="compact"
      nav
      dense
      >
      <router-link to="/LoginAdmin" class="LoginAdmin; menu">
        <v-list-item prepend-icon="mdi-login" value="login"  style="color: #134280;">Login Admin</v-list-item>
      </router-link>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer:true,
    }
  },
 
}
</script>

<style>
  
  .bantuan{
    font-family: roboto;
    font-size: medium;
    color: darkgray;
  }
  .menu{
    text-decoration: none;
    font-size: 16px;
    color: black;
  }
</style>
