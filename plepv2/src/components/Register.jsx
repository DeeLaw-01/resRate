import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { registerUser } from '../../importantStuff'
import axios from 'axios'

const SignupScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [preventLabel] = useState({ userSelect: 'none', pointerEvents: 'none' })

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await axios.post(registerUser, {
        username,
        email,
        password
      })

      setSuccess(response.data.message)
      setError('')
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error)
      } else {
        setError('An unexpected error occurred')
        setSuccess('')
      }
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-600'>
      <div className='w-full p-8 transition-all duration-300 bg-white rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 hover:shadow-xl hover:border-gradient-to-r hover:border-transparent hover:border-4'>
        <div className='flex justify-center mb-6'>
          <img
            src={logo}
            alt='Logo'
            className='w-24 h-24 transition-transform duration-300 hover:scale-105'
            style={{ borderRadius: '50%' }}
          />
        </div>
        <h1 className='mb-6 text-3xl font-semibold text-center text-gray-800'>
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='relative'>
            <input
              type='text'
              value={username}
              onChange={handleUsernameChange}
              placeholder=' '
              className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
              required
            />
            <label
              htmlFor='username'
              className='absolute text-gray-500 transition-transform origin-top-left transform scale-75 -translate-y-4 left-4 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75'
              style={preventLabel}
            >
              Username
            </label>
          </div>
          <div className='relative'>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              placeholder=' '
              className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
              required
            />
            <label
              style={preventLabel}
              htmlFor='email'
              className='absolute text-gray-500 transition-transform origin-top-left transform scale-75 -translate-y-4 left-4 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            <input
              type='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder=' '
              className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
              required
            />
            <label
              style={preventLabel}
              htmlFor='password'
              className='absolute text-gray-500 transition-transform origin-top-left transform scale-75 -translate-y-4 left-4 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75'
            >
              Password
            </label>
          </div>
          <div className='relative'>
            <input
              type='password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder=' '
              className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer'
              required
            />
            <label
              style={preventLabel}
              htmlFor='confirm-password'
              className='absolute text-gray-500 transition-transform origin-top-left transform scale-75 -translate-y-4 left-4 top-3 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75'
            >
              Confirm Password
            </label>
          </div>
          <button
            type='submit'
            className='w-full px-6 py-3 text-white transition-transform duration-300 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:scale-102'
          >
            Sign Up
          </button>
        </form>
        {(error && <p className='mt-4 text-red-600'>{error}</p>) ||
          (success && <p className='mt-4 text-green-600'>{success}</p>)}

        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{' '}
          <a href='/login' className='text-blue-500 hover:text-blue-700'>
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignupScreen
