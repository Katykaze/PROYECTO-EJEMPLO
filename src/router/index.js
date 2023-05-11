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
      path: '/modifyClimber/:id',
      name: 'modifyClimber',
      component: () => import('../views/ModifyClimberView.vue')
    },
    {
      path: '/formClimber',
      name: 'formClimber',
      component: () => import('../views/AddClimberView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/LoginView.vue')
    }
  ]
})
const authRoutes = ['home', 'formClimber','modifyClimber']

router.beforeEach((to, from, next) => {
  if (to.name === 'unkwnow') {
    return next({ name: 'login' })
  }
  if (authRoutes.includes(to.name) && !userStore().isLogged) {
    return next({ name: 'login' })
  }
  next()
})
export default router
