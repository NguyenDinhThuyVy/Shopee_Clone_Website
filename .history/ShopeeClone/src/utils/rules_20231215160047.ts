const rules = {
  required: {
    value: true,
    message: 'Email là bắt buộc'
  },
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: 'Email không đúng định dạng'
  }
}
