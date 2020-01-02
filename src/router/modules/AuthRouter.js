const AuthRouter = {
  path: '/auth/',
  component: () => import(/* webpackPrefetch: true */ '@/views/Shared/RouterRender.vue'),
  children: [
    {
      path: '/',
      name: 'DefaultAuth',
      component: () => import(/* webpackPrefetch: true */ '@/views/Login/Login.vue')
    }
  ]
}

export default AuthRouter
