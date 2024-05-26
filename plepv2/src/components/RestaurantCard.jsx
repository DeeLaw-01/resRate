import React from 'react'
import placeholder from '../assets/norestaurantimage.jpg'

export const RestaurantCard = ({ restaurant }) => {
  const handleError = e => {
    e.target.src = placeholder
  }

  return (
    <div className='flex flex-col justify-between max-w-sm overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2'>
      <img
        className='object-cover w-full h-48'
        src={
          restaurant.photos && restaurant.photos.length > 0
            ? restaurant.photos[0].src
            : placeholder
        }
        alt='restaurant image'
        onError={handleError}
      />
      <div className='flex flex-col flex-grow p-6'>
        <h2 className='mb-2 text-xl font-semibold text-gray-900'>
          {restaurant.name || 'Restaurant Name'}
        </h2>
        <p className='flex-grow text-gray-600'>
          <span className='block text-base text-gray-800'>
            {restaurant.full_address || 'Address not available'}
          </span>
        </p>
        <div className='mt-2'>
          {restaurant.phone_number ? (
            <div className='inline-block p-2 mt-2 text-lg font-bold text-blue-600 bg-blue-100 rounded-md shadow-sm'>
              {restaurant.phone_number}
            </div>
          ) : (
            <p className='mt-2 text-lg font-bold text-blue-600'>
              Phone number not available
            </p>
          )}
        </div>
        <div className='mt-4'>
          <span className='inline-block px-3 py-1 mb-2 text-sm font-medium text-white bg-green-500 rounded-full'>
            Rating: {restaurant.rating || 'N/A'} (
            {restaurant.review_count || '0'} reviews)
          </span>
          <span className='inline-block px-3 py-1 mb-2 ml-2 text-sm font-medium text-white bg-blue-500 rounded-full'>
            Price Level: {restaurant.price_level || 'N/A'}
          </span>
          <span
            className={`inline-block px-3 py-1 mb-2 ml-2 text-sm font-medium text-white rounded-full ${
              restaurant.state ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            Status: {restaurant.state ? restaurant.state : 'Closed'}
          </span>
        </div>
      </div>
      <div className='flex justify-between px-6 pb-6'>
        <a
          href={restaurant.place_link || '#'}
          rel='noopener noreferrer'
          target='_blank'
          className='text-blue-500 hover:text-blue-700'
        >
          View on Map
        </a>
        <a
          href={`/seereview/${restaurant.business_id}`}
          target='_self'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-700'
        >
          See All Reviews
        </a>
      </div>
    </div>
  )
}
