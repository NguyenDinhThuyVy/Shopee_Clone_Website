import axios, { AxiosError } from 'axios'

export function isAxiosError(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.AxiosError(error)
}
