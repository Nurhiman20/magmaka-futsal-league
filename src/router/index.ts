import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'matches',
      component: () => import('../views/MatchesView.vue')
    },
    {
      path: '/standings',
      name: 'standings',
      component: () => import('../views/StandingsView.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/StatsView.vue')
    }
  ]
})

export default router
