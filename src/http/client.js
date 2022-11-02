import axios from 'axios'

const timeout = 600000
const axiosInstance = axios.create({ baseURL: process.env.VUE_APP_BASE_URL || '/', timeout })

const client = {
  get: axiosInstance.get,
  delete: axiosInstance.delete,
  post: axiosInstance.post,
  put: axiosInstance.put
}

export default client
