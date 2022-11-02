import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/:reg',
    name: 'registration',
    component: () => import('../views/SignUpView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
