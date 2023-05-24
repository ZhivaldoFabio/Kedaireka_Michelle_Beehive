<template>
    <v-navigation-drawer v-model="drawer"
    width="250"
    permanent
    location="left"
    >
      <v-list-item>
          <v-img
            max-height="150"
            max-width="150"
            src="1.png"
          ></v-img>
      </v-list-item>
  
      <v-divider></v-divider>
  
      <v-layout>
        <v-flex class="mt-5">
          <v-avatar size="100" variant="outlined 2px">
            <v-img src="admin.png"></v-img>
          </v-avatar>
          <p class="text-admn"><b>Admin</b></p>
        </v-flex>
        
      </v-layout>
      
      <v-list class="data">

        <v-list-item prepend-icon="mdi-database" value="datakarbon">Data Karbon</v-list-item>

        <v-list-item prepend-icon="mdi-file" value="arsip">Arsip</v-list-item>
        
      </v-list>
      
      <template v-slot:append>
      <v-divider></v-divider>
        <v-list
        density="compact"
          nav
        >
        <router-link to="/keluar" class="keluar">
          <v-list-item prepend-icon="mdi-logout" value="keluar">Keluar</v-list-item>
        </router-link>
        </v-list>
        
      </template>

    </v-navigation-drawer>
  
  </template>
  
  <script>
  export default {
    data () {
      return {
        drawer: true,
      }
    },
  }
  </script>
  
  <style>
  .mt-5{
    margin: 40px;
    width: 50%;
    border: 3px-solid black;
    padding: 10px;
  }
  .text-admn{
    margin-left: 25px;
  }
  .data{
    margin-top: -40px;
  }
  .keluar{
    text-decoration: none;
  }
  </style>