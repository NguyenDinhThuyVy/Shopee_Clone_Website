import { ResponseApi } from './utils.type'

export type AuthRespone = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
