import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'
import axios from 'axios'
import { loginUser } from '../../importantStuff'

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [preventLabel] = useState({ userSelect: 'none', pointerEvents: 'none' })

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(loginUser, {
        email,
        password
      })
      setSuccess(response.data.message)
      setError('')
      onLogin() // Call the onLogin function to update the parent state
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error)
        setSuccess('')
      } else {
        setError('An unexpected error occurred')
      }
    }
  }

  useEffect(() => {
    const clearFields = () => {
      document.getElementById('email').value = ''
      document.getElementById('password').value = ''
      console.log('cleared')
    }
    clearFields()
  }, [])

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-600'>
      <div className='w-full p-8 transition-all duration-300 bg-white rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 hover:shadow-xl hover:border-gradient-to-r hover:border-transparent hover:border-4'>
        <div className='flex justify-center mb-6'>
          <img
            src={logo}
            alt='Logo'
            className='w-32 h-32 transition-transform duration-300 hover:scale-105'
            style={{ borderRadius: '50%' }}
          />
        </div>
        <h1 className='mb-6 text-3xl font-semibold text-center text-gray-800'>
          Login
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='relative'>
            <input
              autoComplete='off'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              placeholder=' '
              className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
              required
            />
            <label
              htmlFor='email'
              className='absolute text-gray-500 transition-transform origin-top-left transform scale-75 -translate-y-4 left-4 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            <input

              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder=' '
              className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
              required
            />
            <label
              htmlFor='password'
              className='absolute text-gray-500 transition-transform origin-top-left transform scale-75 -translate-y-4 left-4 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75'
            >
              Password
            </label>
          </div>
          <button
            type='submit'
            className='w-full px-6 py-3 text-white transition-transform duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:scale-102'
          >
            Login
          </button>
        </form>
        {(error && <p className='mt-4 text-red-600'>{error}</p>) ||
          (success && <p className='mt-4 text-green-600'>{success}</p>)}

        <p className='mt-4 text-center text-gray-600'>
          Don't have an account?{' '}
          <a href='/signup' className='text-blue-500 hover:text-blue-700'>
            Register
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginScreen
