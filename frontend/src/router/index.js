import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Monitor from '../views/Monitor.vue'
import UsageStatistics from '../views/UsageStatistics.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
    redirect: '/monitor',
    children: [
      {
        path: 'monitor',
        name: 'Monitor',
        component: Monitor
      },
      {
        path: 'usage-statistics',
        name: 'UsageStatistics',
        component: UsageStatistics
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
