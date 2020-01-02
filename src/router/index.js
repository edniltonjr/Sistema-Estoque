import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/Shared/SiteLayout'

import AdminRouter from './modules/AdminRouter'
import AuthRouter from './modules/AuthRouter'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/admin',
    component: Layout,
    children: [
      AdminRouter,
      AuthRouter
    ]
  }
]

export default new Router({
  mode: 'history', // require service support
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
