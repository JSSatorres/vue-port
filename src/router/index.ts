import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeViewvue'

// si lo hago con @ da fallo me encuntra las carpetas cuando navega con la / pero no encutras los archivos de vue
// los archvios de css si los encuentra he dejado capturas de pantalla en la carpeta screenshot
// import HomeView from '../views/HomeViewvue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home' })
    }
  ]
})

export default router
