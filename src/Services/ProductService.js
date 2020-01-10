import Http from '@/Services/BaseService.js'
import { showError, userToken } from '../errors/default.js'
let baseApiUrl = process.env.VUE_APP_BASE_API_URL

export const ProductService = {
  getProducts () {
    return new Promise((resolve, reject) => {
      Http.get(`${baseApiUrl}/produtos`, userToken).then(res => {
        resolve(res.data)
      }).catch((err) => {
        showError(err)
        resolve(false)
      })
    })
  }

}

export default ProductService
