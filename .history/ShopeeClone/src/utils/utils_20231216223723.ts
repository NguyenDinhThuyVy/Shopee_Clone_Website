import { AxiosError } from 'axios'
import { isAxiosError } from 'node_modules/axios/index.d.cts'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

// export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
//   return axios.isAxiosError(error)
// }
export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
