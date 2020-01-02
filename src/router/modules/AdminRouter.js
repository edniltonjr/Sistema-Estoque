const AdminRouter = {
  path: '/admin',
  component: () => import(/* webpackPrefetch: true */ '@/views/Shared/RouterRender.vue'),
  children: [
    {
      path: '/',
      name: 'DefaultAdmin',
      redirect: '/auth'
    }
  ]
}

export default AdminRouter
