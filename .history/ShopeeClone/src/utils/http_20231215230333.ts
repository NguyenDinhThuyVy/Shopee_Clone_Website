import axios, { AxiosError, type AxiosInstance } from 'axios'
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000
    })
  }
}
