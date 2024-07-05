import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/ChooseTrip.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/trip-details',
      name: 'details',
      component: () => import('../components/TripDetails.vue')
    },
    {
      path: '/quote',
      name: 'quote',
      component: () => import('../components/QuotePage.vue')
    },
    {
      path: '/extras',
      name: 'extras',
      component: () => import('../components/ExtrasPage.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../components/CheckoutPage.vue')
    }
  ]
})

export default router
