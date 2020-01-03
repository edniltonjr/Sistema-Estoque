import Http from '@/Services/BaseService.js'
let baseApiUrl = process.env.VUE_APP_BASE_API_URL

export const ProductService = {
  getProducts () {
    return new Promise((resolve, reject) => {
      Http.get(`${baseApiUrl}/produtos`).then(res => {
      })
    })
  }

}

export default ProductService
