import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../pages/HomePage.vue"
import ProjectsPage from '@/pages/ProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/projets',
      name: 'projects',
      component: ProjectsPage
    }
  ]
})

export default router
