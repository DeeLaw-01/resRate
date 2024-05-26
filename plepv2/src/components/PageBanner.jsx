import React from 'react'
import { motion } from 'framer-motion'

const PageBanner = ({ title, subtitle, image }) => {
  return (
    <motion.div
      className='relative bg-gray-200 dark:bg-gray-800'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className='absolute inset-0 bg-center bg-cover'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='relative z-10 flex flex-col items-center justify-center w-full h-64 bg-gray-900 bg-opacity-50 dark:bg-opacity-50 dark:bg-gray-900'>
        <h1 className='text-3xl font-bold text-center text-white md:text-4xl'>
          {title}
        </h1>
        {subtitle && (
          <p className='mt-2 text-lg text-center text-gray-200 md:text-xl'>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default PageBanner
