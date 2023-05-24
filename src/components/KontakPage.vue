<template>
    <div class="KontakPage">
    <v-app style="background: white;">
    <v-main>
    <v-container 
    align="center" 
    justify="center" 
    class="bg">
      <v-col cols="10" class="pa-0 my-8" >
        <v-card 
        class="text-center"
        color="#134280"
        width="780"
        height="612"
        >
    <v-card-text
    class=" my-16"
    align="center"
    justify="center"
    >
        <div>
          <h1 style="color: white; font-size:40pt; margin:4%" class="mt-13"> KONTAK KAMI </h1>
          <div 
            class="pt-3 text-center"   
          >
          <v-img
            class="img-fluid"
            height="90"
            widht="90"
            src="contact-us.png"
            color="white"
      ></v-img>
          <h1 style="color: white; font-size:16pt; margin:4%" class="mt-13"> contact@beehivedrones.com <br/><br/> 0819-1901-1293 </h1>
           </div>
        </div>
      </v-card-text>
      <v-card 
            color="#e7ecf2"
            width="800"
            height="110"
            >
            <v-row>
              <v-col>
                <v-img
                  class="ma-7 px-2"
                  max-height="110"
                  max-width="110"
                  src="droneISAI-nobg.png"
                ></v-img>
                <v-img
                  class="logoBeehive"
                  max-height="50"
                  max-width="50"
                  src="ukdw.png"
                ></v-img>
                <v-img
                  class="logoFTI"
                  max-height="70"
                  max-width="70"
                  src="fti-ukdw.png"
                ></v-img>
                <v-img
                  class="logoUKDW"
                  max-height="90"
                  max-width="90"
                  src="5.png"
                ></v-img>
                <v-img
                  class="logoKedaireka"
                  max-height="120"
                  max-width="120"
                  src="3.png"
                ></v-img>
                <div class="sosmed">
                  <p class="akun">@beehivedrone</p>
                  <a class="v-btn v-btn--elevated v-btn--icon v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated ma-2" href="https://www.instagram.com/beehivedrones/">
                    <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><span class="v-btn__content" data-no-activator=""><i class="mdi-instagram mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>
                    </span></a>
                  <a class="v-btn v-btn--elevated v-btn--icon v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated ma-2" href="https://www.facebook.com/beehivedrone?_rdc=1&amp;_rdr"><span class="v-btn__overlay"></span>
                    <span class="v-btn__overlay"></span><span class="v-btn__content" data-no-activator=""><i class="mdi-facebook mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i></span></a>
                  <a class="v-btn v-btn--elevated v-btn--icon v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated ma-2" href="https://www.linkedin.com/company/beehivedrones/">
                    <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><span class="v-btn__content" data-no-activator=""><i class="mdi-linkedin mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i></span></a>
                </div>
              </v-col>
              
        </v-row> 
        </v-card>
        </v-card>
       </v-col> 
    </v-container>
  </v-main>
    </v-app>
  </div>

  </template>
  
  <script>
    export default {
     data(){
      return{
          // text: '',
      }
     }
    }
  </script>

  <style>
     .sosmed{
      padding-left: 510px;
      margin-top: -58px;
    }
    .akun{
      padding-left: 60px;
      font-weight: bold;
      padding-bottom: -25px;
    }
    .logoBeehive{
      margin-left: 145px;
      margin-top: -78px;
    }
    .logoUKDW{
      margin-left: 300px;
      margin-top: -50px;
    }
    .logoKedaireka{
      margin-left: 400px;
      margin-top: -40px;
    }
    .logoFTI{
      margin-left: 210px;
      margin-top: -48px;
    }
    .font{
      color: white;
    }
  </style>