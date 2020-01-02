import axios from 'axios'

const clientHttp = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
})

export default clientHttp
