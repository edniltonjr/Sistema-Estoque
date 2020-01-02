import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './errors/msg'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/default.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

// BootStrap
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
