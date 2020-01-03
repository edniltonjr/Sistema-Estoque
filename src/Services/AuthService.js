import Http from '@/Services/BaseService.js'
import { showError } from '../errors/default.js'

let baseApiUrl = process.env.VUE_APP_BASE_API_URL

export const AuthService = {

  signin (userData) {
    return new Promise((resolve, reject) => {
      Http.post(`${baseApiUrl}/auth`, userData).then(res => {
        localStorage.setItem('_userToken_', res.data.token)
        resolve(true)
      }).catch((err) => {
        console.log('errado')
        showError(err)
      })
    })
  },
  logout () {
    return new Promise(function (resolve, reject) {
      localStorage.removeItem('_userToken_')
      localStorage.removeItem('_userInfo_')
      resolve(true)
    })
  },
  getUserInfo () {
    if (localStorage.getItem('_userToken_')) {
      return new Promise((resolve, reject) => {
        let userToken = { headers: { Authorization: 'Bearer ' + localStorage.getItem('_userToken_') || '' } }
        Http.post(`${baseApiUrl}/admin/info`, null, userToken).then(res => {
          if (res.data.auth) {
            localStorage.setItem('_userInfo_', JSON.stringify(res.data.user[0]))
            resolve(true)
          } else {
            global.instanceApp.$router.push({ name: 'Logout' })
          }
        }).catch((err) => {
          localStorage.removeItem('_userToken_')
          localStorage.removeItem('_userInfo_')
          showError(err)
          resolve(false)
        })
      })
    } else {
      localStorage.removeItem('_userToken_')
      localStorage.removeItem('_userInfo_')
    }
  }

}

export default AuthService
