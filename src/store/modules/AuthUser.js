export const AuthUser = {
  state: {
    // Estados possíveis
  },
  mutations: {
    SET_USER: (state, data) => {
      // state.user = user.authUser
    }
  },
  actions: {
    setAuthUser ({ commit }, data) {
      commit('SET_USER', data)
    }
  }
}

export default AuthUser
