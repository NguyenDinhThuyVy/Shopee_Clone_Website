import axios, { AxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.AxiosError(error)
}
export function isAxiosUnprocessableEntityError(error: unknown) {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
