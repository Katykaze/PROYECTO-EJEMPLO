import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue'),
      meta: {
        requiresAuth: true // opciona: indica que esta ruta requiere autenticación
      }
    }
    
  ]
})

// router.beforeEach(to,from,next){
//   if(to.path === '/login'){
//     next()
//   }
// }
export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })
//
// export default router
