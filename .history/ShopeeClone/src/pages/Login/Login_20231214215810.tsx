import './mainRegister.scss'
function Login() {
  return (
    <div className='main w-full bg-orange'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input type='email' name='email' className='p-3' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
