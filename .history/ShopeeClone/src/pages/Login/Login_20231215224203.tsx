import { Link } from 'react-router-dom'
import '../styles/mainRegister.scss'
import { useForm } from 'react-hook-form'
import getRules, { Schema } from 'src/utils/rules'
import Input from 'src/components/Input'
type FormData = Schema
function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit(() => {
    // console.log(data)
  })
  console.log(errors)
  return (
    <div className='main w-full bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-3'
                placeholder='Email/Số điện thoại/Tên Đăng Nhập'
                errorMessage={errors.email?.message}
                rules={rules.email}
              ></Input>
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-3'
                placeholder='Mật Khẩu'
                errorMessage={errors.password?.message}
                rules={rules.password}
                autoComplete='on'
              ></Input>
              <button
                type='submit'
                className='flex mt-2 w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-opacity-80 boreder rounded-lg '
              >
                Đăng Nhập
              </button>
              <div className='m-2 flex justify-between text-xs text-blue-500 hover:text-blue-600'>
                <a href='/'>Quên mật khẩu</a>
                <a href='/'>Đăng nhập với SMS</a>
              </div>
              <div>
                <div className='flex items-center'>
                  <div className='flex-1 h-px w-4/5 bg-slate-200'></div>
                  <span className='uppercase text-slate-300 px-4'>Hoặc</span>
                  <div className='flex-1 h-px w-4/5 bg-slate-200'></div>
                </div>
                <div className='flex gap-x-5 mt-3'>
                  <button className='flex  gap-x-2 items-center justify-center p-3 border border-gray-400 rounded-lg basis-1/2 shadow-md '>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' height='25' width='25' viewBox='0 0 512 512'>
                        <path
                          fill='#2166de'
                          d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z'
                        />
                      </svg>
                    </div>
                    <div>Facebook</div>
                  </button>
                  <button className='flex  gap-x-2 items-center justify-center p-3 border border-gray-400 rounded-lg basis-1/2 shadow-md'>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' height='25' width='25' viewBox='0 0 496 512'>
                        <path
                          fill='#b95555'
                          d='M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z'
                        />
                      </svg>
                    </div>
                    <div>Telegram</div>
                  </button>
                </div>
                <div className='mt-5'>
                  <div className='flex items-center justify-center gap-x-1'>
                    <span className='text-slate-300'>Bạn mới biết đến Shopee</span>
                    <Link className='text-orange' to='/register'>
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login