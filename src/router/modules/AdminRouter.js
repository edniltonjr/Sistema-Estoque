const AdminRouter = {
  path: '/admin/',
  component: () => import(/* webpackPrefetch: true */ '@/views/Shared/RouterRender.vue'),
  children: [
    {
      path: '/',
      name: 'DefaultAdmin',
      component: () => import(/* webpackPrefetch: true */ '@/views/Admin/AdminPages.vue')
    }
  ]
}

export default AdminRouter
