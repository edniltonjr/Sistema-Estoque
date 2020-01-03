import AuthService from '@/Services/AuthService.js'

const user = localStorage.getItem('_userInfo_') || null

export const AuthUser = {
  state: {
    userInfo: user || null
  },
  mutations: {
    SET_USER: (state, data) => {
      // state.user = user.authUser
    }
  },
  actions: {
    setAuthUser ({ commit }, data) {
      commit('SET_USER', data)
    },
    getUserInfo (state) {
      if (state.userInfo) {
        return state.userInfo
      } else {
        return AuthService.getUserInfo()
      }
    }
  }
}

export default AuthUser
