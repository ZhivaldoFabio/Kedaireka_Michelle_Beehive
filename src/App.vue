<template>
  <v-app  class="bgcal">
    <SideMenu/>
    <!-- <SidebarAdmin /> -->
  <v-main class="bgcal">
    <router-view></router-view>
  </v-main>
  </v-app>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
// import SidebarAdmin from './components/SidebarAdmin.vue';

import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged,  } from "firebase/auth";
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

export default {
  name: 'App',

  components: {
    SideMenu,
    // SidebarAdmin,
  },

  data: () => ({
    //
  }),
}
</script>
<style>
@font-face {
  font-family: customFonts;
  src: url(@/assets/font/BellotaText-Regular.ttf);
}
.bgcal{
  font-family: customFonts;
}

</style>
