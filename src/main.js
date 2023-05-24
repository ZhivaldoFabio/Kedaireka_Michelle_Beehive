import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import App from './App.vue'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbophTHxa6VeMczPcdTRpZLrwd1h-R7P4",
  authDomain: "kedaireka1-2ccb7.firebaseapp.com",
  projectId: "kedaireka1-2ccb7",
  storageBucket: "kedaireka1-2ccb7.appspot.com",
  messagingSenderId: "1031616777171",
  appId: "1:1031616777171:web:be60291a3a0ba0e6857d26"
};

// Initialize Firebase
initializeApp(firebaseConfig);

loadFonts()

// const app = Vue.createApp(App);
// app.use(VueAxios, axios);
// app.use(vuetify);
// app.use(router);
// app.mount('#app');
createApp(App)
  .use(vuetify)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app')
