const gettersCommon = {
  getStateMenu: state => state.Common.stateMenu
}

const gettersUser = {
  userToken: state => state.AuthUser.token,
  userAuth: state => state.AuthUser.user,
  userStatus: state => state.AuthUser.status,
  userRoles: state => state.AuthUser.roles,
  userInfo: state => state.AuthUser.userInfo
}

const getters = Object.assign(
  {},
  gettersCommon,
  gettersUser
)

export default getters
