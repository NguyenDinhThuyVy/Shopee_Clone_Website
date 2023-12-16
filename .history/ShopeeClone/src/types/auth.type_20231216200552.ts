import { ResponseApi } from './utils.type'

export type Auth = ResponseApi<{
  access_token: string
  expires: string
  user: user
}>
