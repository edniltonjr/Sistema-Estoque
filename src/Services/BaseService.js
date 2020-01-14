import axios from 'axios'

const clientHttp = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
})

clientHttp.interceptors.request.use(req => {
  if (req.baseURL === process.env.VUE_APP_BASE_API_URL) {
    var token = localStorage.getItem('_userToken_')
    if (token) {
      req.headers.common['Authorization'] = 'Bearer ' + token
    } else {
      console.log(token)
      console.log('ERRO')
    }
  }
  return req
})

export default clientHttp
