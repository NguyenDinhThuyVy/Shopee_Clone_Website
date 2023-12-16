import type { RegisterOptions } from 'react-hook-form'
type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài đã vượt quá 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 đến 160 ký tự'
    }
  }
}
export default rules
