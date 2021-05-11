/**
 * @Author: Caven
 * @Date: 2021-02-02 11:03:03
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Home'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
