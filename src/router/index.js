import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanetsView from '../views/PlanetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/planets',
      name: 'planets',
      component: PlanetsView
    }
  ]
})

export default router
