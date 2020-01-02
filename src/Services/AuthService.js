import Http from '@/Services/BaseService.js'
import { showError } from '../errors/default.js'

let baseApiUrl = process.env.VUE_APP_BASE_API_URL

export const AuthService = {

  signin (userData) {
    return new Promise((resolve, reject) => {
      Http.post(`${baseApiUrl}/auth`, userData).then(res => {
        localStorage.setItem('_userToken_', res.data.token)
        resolve(true)
        alert('Logado com Sucesso!')
      }).catch((err) => {
        console.log('errado')
        showError(err)
      })
    })
  },
  checkToken () {
    return new Promise((resolve, reject) => {
      let userToken = { headers: { Authorization: 'Bearer ' + localStorage.get('_userToken_') || '' } }
      Http.post(`${baseApiUrl}/admin`, userToken).then(res => {
        resolve(res.data)
      }).catch((err) => {
        showError(err)
      })
    })
  }

}

export default AuthService
