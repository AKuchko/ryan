import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:login',
    name: 'Home',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/:reg',
    name: 'registration',
    component: () => import('../views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
