import Vue from 'vue'
import Vuex from 'vuex'
import AuthUser from './modules/AuthUser'
import Common from './modules/Common'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthUser,
    Common
  },
  getters
})
