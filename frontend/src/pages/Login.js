import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'


const Login = () => {
  // Styles
  const errorStyle = `text-xs md:text-sm animate-pulse rounded-sm text-[#EE332F] 
                      font-normal border border-[#EE332F] bg-[#FDEDEC] mt-2 p-2`

  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // isLoading is used to disable login button
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (e) => {
    // Prevents the page from refreshing on sumbit
    e.preventDefault()

    // recieves email and password
    await login(email, password)
  }

  return (
    <div className='w-full max-w-md mx-auto rounded items-center m-4 p-4'>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <h1 className='font-semibold text-lg md:text-2xl'>Log In</h1>
          <h3 className='mt-1 font-normal text-sm md:text-base text-gray-500'>Enter your details to log in.</h3>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Email</label>
          <input
            type='email'
            className='text-sm md:text-base shadow border border-black rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-xs md:text-sm font-medium mb-2'>Password</label>
          <input
            type='password'
            autoComplete='on'
            className='text-sm md:text-base shadow border border-black rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button disabled={isLoading} className='mt-5 text-sm md:text-base uppercase bg-black text-white font-medium py-2 px-4 rounded hover:shadow-md w-full'>
          Log In
        </button>
        <h1 className='mt-4 text-center font-normal text-sm md:text-sm'>
          Don't have an account?{' '}
          <Link to='/signup' className='font-semibold text-black'>Sign Up</Link>
        </h1>
        {error && <div className={errorStyle}>{ error }</div>}
      </form>
    </div>
  )
}

export default Login