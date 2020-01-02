import LoginLayout from '@/views/Shared/LoginLayout.vue'
import AuthService from '@/Services/AuthService.js'

const AuthRouter = {
  path: '/auth/',
  component: LoginLayout,
  children: [
    {
      path: '/',
      name: 'DefaultAuth',
      component: () => import(/* webpackPrefetch: true */ '@/views/Login/Login.vue')
    },
    {
      path: 'logout',
      name: 'Logout',
      hidden: true,
      beforeEnter (to, from, next) {
        AuthService.logout()
        window.location = '/auth/'
      }
    }
  ]
}

export default AuthRouter
