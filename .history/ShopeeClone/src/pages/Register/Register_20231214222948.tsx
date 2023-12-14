import './mainRegister.scss'
function Register() {
  return (
    <div className='main w-full bg-orange'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-4'>
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-slate-900'
                  placeholder='Email/Số điện thoại/Tên Đăng Nhập'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'>Email không hợp lệ</div>
              </div>
              <div className='mt-4'>
                {' '}
                <input
                  type='password'
                  name='password'
                  className='mt-4 p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-slate-900'
                  placeholder='Mật Khẩu'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'>Mật khẩu không hợp lệ</div>
              </div>
              <div className='mt-4'>
                <input
                  type='password'
                  name='password'
                  className=' p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-slate-900'
                  placeholder='Nhập lại mật khẩu'
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1rem]'>Mật khẩu không trùng khớp</div>
              </div>
              <button className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'>
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
