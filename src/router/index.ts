import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeViewV3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
  ],
})

export default router