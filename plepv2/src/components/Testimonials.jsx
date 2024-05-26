import React from 'react'

const Testimonial = ({ author, quote, avatar }) => {
  return (
    <div className='p-6 bg-white rounded-lg dark:bg-gray-800 md:p-8'>
      <div className='flex items-center mb-4'>
        <img
          src={avatar}
          alt={author}
          className='w-12 h-12 mr-4 rounded-full'
        />{' '}
        {/* Avatar */}
        <div>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
            {author}
          </h3>{' '}
          {/* Author */}
        </div>
      </div>
      <p className='text-gray-700 dark:text-gray-300'>{quote}</p> {/* Quote */}
    </div>
  )
}

export default Testimonial
