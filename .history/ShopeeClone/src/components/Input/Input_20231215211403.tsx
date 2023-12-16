interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage: string
  placeholder: string
  name: string
  register: UseFormRegister<any>
}

function Input({}: Props) {
  return (
    <div className='mt-3'>
      <input
        type='email'
        {...register('email', rules.email)}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-slate-900'
        placeholder='Email/Số điện thoại/Tên Đăng Nhập'
      />
      <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errors.email?.message}</div>
    </div>
  )
}

export default Input
