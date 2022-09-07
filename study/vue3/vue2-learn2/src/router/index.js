import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/watch',
      name: 'watch',
      component: ()=>import('../views/watch.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/RefView.vue'),
    },
    {
      path: '/comp',
      component: () => import('../views/ComponentSys.vue'),
    },
  ]
})

export default router
