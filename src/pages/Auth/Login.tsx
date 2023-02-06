import React from 'react'
import Logo from '@/components/Logo'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  email: string
  password: string
}

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required()

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { email: 'admin@mail.com', password: 'admin' },
  })
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => handleLogin(data))

  const handleLogin = ({ email, password }: FormValues) => {
    if (email === 'admin@mail.com' && password === 'admin') {
      localStorage.setItem('token', 'dummyToken')
      navigate('/dashboard')
    } else {
      alert('Incorrect username or password')
    }
  }
  return (
    <>
      <div className={'text-center mb-4'}>
        <Logo />
      </div>
      <form onSubmit={onSubmit}>
        <div className='bg-white shadow w-full rounded-lg divide-y divide-gray-200'>
          <div className='p-4'>
            <h2 className={'py-3'}>Login</h2>

            <div className={'mt-1 mb-5'}>
              <input
                {...register('email')}
                type='text'
                className='border border-gray-300  rounded-lg px-3 py-2  text-sm w-full'
                placeholder={'Email *'}
              />
              {errors.email && <small className={'text-red-700'}>{errors.email.message}</small>}
            </div>
            <div className={'mt-1 mb-5'}>
              <input
                {...register('password')}
                type='password'
                className='border border-gray-300    rounded-lg px-3 py-2  text-sm w-full'
                placeholder={'Password *'}
              />
              {errors.password && (
                <small className={'text-red-700'}>{errors.password.message}</small>
              )}
            </div>

            <div>
              <label className='inline-flex items-center'>
                <input type='checkbox' className='form-checkbox h-4 w-4 text-gray-600' />
                <span className='ml-2 text-gray-900'>Remember me</span>
              </label>
            </div>
            <div className='grid grid-cols-2 gap-1 mt-8'>
              <div className=' sm:text-left whitespace-nowrap inline-block align-middle justify-center items-center'>
                <a href={'#'} className=' no-underline hover:underline font-bold text-gray-900'>
                  <span>Forgot Password?</span>
                </a>
              </div>
              <div className='text-center sm:text-right whitespace-nowrap'>
                <button
                  type='submit'
                  className='bg-primary text-white px-5 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block'
                >
                  <span className='inline-block'>Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
