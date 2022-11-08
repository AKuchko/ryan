import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/mainView.vue') 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/SignInView.vue')
  },
  {
    path: '/reg',
    name: 'registration',
    component: () => import('../views/SignUpView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
