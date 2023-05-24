<template>
  <div class="LoginAdmin">
    <v-app style="background: #134280;">
      <v-container align="center" justify="center" class="pt-14">
        <v-card class="wrapper" elevation="20" height="550" width="500">
          <div class="text-center pa-5">
            <img src="droneISAI-white.png" class="img-fluid" alt="" height="125.98" width="240">
          </div>
          <p>
            Selamat Datang!
          </p>
          <p>
            Silahkan Login ke Akun Anda.
          </p>
          <v-form 
          v-model="valid" 
          class="pa-5 mt-5" 
          >
            <v-text-field 
            
            label="Email" 
            type="email" 
            v-model="email"
            ></v-text-field>

            <v-text-field 
            label="Password" 
            type="password" 
            v-model="password"
            ></v-text-field>
            
            <v-btn 
            class="btn mt-3 font" 
            
            v-on:click="login"
            >Masuk</v-btn>
          </v-form>
        </v-card>

      </v-container>
    </v-app>
  </div>
</template>

<script setup>

import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const login = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(data => {
      console.log("success");
      console.log(auth.currentUser);
      router.push("/AdminTable");
    })
    .catch(error => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          alert("Invalid email")
          break;
        case "auth/user-not-found":
          errMsg.value = "Akun tidak terdaftar!";
          alert("Akun tidak terdaftar!")
          break;
        case "auth/wrong-password":
          errMsg.value = "Password Salah";
          alert("Password Salah")
          break;
        default:
          errMsg.value = "Email atau Password Anda salah!";
          alert("Email atau Password Anda salah!")
          break;
      }
    });
};
</script>

<script>
export default {
  components: {
  
  },
  data: () => ({
    items: ["Login (Admin)"],
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: value => !!value || "Required.",
    },
  }),
};
</script>
<style>
.font{
  background-color: #134280;
}
</style>