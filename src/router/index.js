import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/LoginView.vue')
    }
    
  ]
})


router.beforeEach((to,from,next) =>{
  if(to.name === 'unkwnow'){
    next({name:'login'})
  }
  if(to.name === 'home' && !userStore().isLogged){
    next({name:'login'})
  }
  next();
})
export default router

