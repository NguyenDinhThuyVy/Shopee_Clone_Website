import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage: string | undefined
  placeholder: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  className: string
  autoComplete: string
}

function Input({ className, type, errorMessage, placeholder, name, register, rules, autoComplete }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        {...register(name, rules)}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-slate-900'
        placeholder={placeholder}
        autoComplete={}
      />
      <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errorMessage}</div>
    </div>
  )
}

export default Input
