
import { createWebHistory, createRouter } from 'vue-router'
import TentangPage from '../components/TentangPage.vue'
import KontakPage from '../components/KontakPage.vue'
import HomePage from '../components/HomePage.vue'
import LoginAdmin from '../components/LoginAdmin.vue'
import TrenKarbon from '../components/TrenKarbon.vue'
import MapComponent from '../components/MapComponent.vue'
// import SidebarAdmin from '../components/SidebarAdmin.vue'
import AdminTable from '../components/AdminTable.vue'
import TambahData from '../components/TambahData.vue'
import KalkulatorComponent from '../components/KalkulatorComponent.vue'

import {
  getAuth, onAuthStateChanged,
} from "firebase/auth"; 

const routes=[
{
  path:'/',
  name:'HomePage',
  component: HomePage
},
{
  path:'/Tentang',
  name:'TentangPage',
  component: TentangPage
},
{
  path:'/Kontak',
  name:'KontakPage',
  component: KontakPage
},
{
  path:'/LoginAdmin',
  name:'LoginAdmin',
  component: LoginAdmin
},
{
  path:'/AdminTable',
  name:'AdminTable',
  component: AdminTable,
  meta:{
    requiresAuth: true,
  },
},
{
  path:'/TambahData',
  name:'TambahData',
  component: TambahData,
  meta:{
    requiresAuth: true,
  },
},

{
  path:'/tren',
  name:'TrenKarbon',
  component: TrenKarbon
},
{
  path:'/kalkulator',
  name:'KalkulatorComponent',
  component: KalkulatorComponent
},
{
  path:'/map',
  name:'MapComponent',
  component: MapComponent
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next)=>{
  const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));
  setTimeout(() => {
    localStorage.removeItem('authenticated');
  }, 3600000);
  if(to.name == "" && !isAuthenticated) next({name: ""});
  else next()
})
const getCurrentUser = () =>{
  return new Promise((resolve,reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
router.beforeEach(async(to,from,next)=>{
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()){
      next();
    }else{
      alert("you dont have access!");
      next("/");
    }
  }else{
    next();
  }
});
export default router;