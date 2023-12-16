import axios from 'axios'

export function isAxiosError(error: unknown) {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.AxiosError(error)
}
