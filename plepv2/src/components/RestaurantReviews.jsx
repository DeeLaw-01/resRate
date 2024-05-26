import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ReviewSlideshow } from './ReviewSlideshow.jsx'
import { IoStarSharp } from 'react-icons/io5'
import { Loader } from './Loader.jsx'
import { getReviews, mapDataHost, mapDataKey } from '../../importantStuff'

export const RestaurantReviews = () => {
  const { id } = useParams()
  const [reviewsData, setReviewsData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      console.log(id)
      const options = {
        method: 'GET',
        url: getReviews,
        params: {
          business_id: id,
          country: 'pk',
          lang: 'en',
          limit: '20'
        },
        headers: {
          'X-RapidAPI-Key': mapDataKey,
          'X-RapidAPI-Host': mapDataHost
        }
      }

      try {
        console.log('options:', options)
        const response = await axios.request(options)
        console.log(response.data)
        setReviewsData(response.data.data || {})
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    fetchReviews()
  }, [id])

  const {
    name,
    full_address,
    rating,
    phone_number,
    price_level,
    reviews = [],
    state,
    timezone,
    types = [],
    working_hours = [],
    photos = []
  } = reviewsData

  return (
    <div>
      {loading ? (
        <div className='flex items-center justify-center h-screen'>
          <Loader />
        </div>
      ) : Object.keys(reviewsData).length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <>
          <ReviewSlideshow images={photos} />
          <div className='container p-4 mx-auto'>
            <div className='p-4 mb-4 bg-gray-100 rounded-lg'>
              <h1 className='mb-4 text-2xl font-semibold text-gray-900 '>
                {name || 'No name available'}
              </h1>
              <p className='block text-base text-gray-800'>
                {full_address || 'No address available'}
              </p>
              <p className='inline-block p-2 mt-2 text-lg font-bold text-blue-600 bg-blue-100 rounded-md shadow-sm'>
                {phone_number || 'No phone number available'}
              </p>
              <p className='inline-block px-3 py-1 mb-2 ml-2 text-sm font-medium text-white bg-green-500 rounded-full'>
                {price_level || 'N/A'}
              </p>
              <p className='inline-block px-3 py-1 mb-2 ml-5 text-sm font-medium text-white bg-green-500 rounded-full'>
                {`Rating: ${rating || 'N/A'}`}
              </p>
              <p className='inline-block px-3 py-1 mb-2 ml-2 text-sm font-medium text-white bg-green-500 rounded-full'>{`State: ${
                state || 'N/A'
              }`}</p>
              <p className='text-gray-700'>{`Timezone: ${
                timezone || 'N/A'
              }`}</p>
              <p className='text-gray-700'>{`Types: ${
                types.join(', ') || 'N/A'
              }`}</p>
              <div>
                <div>
                  <h2 className='m-4 text-2xl font-semibold text-gray-900'>
                    Working Hours
                  </h2>
                  {Object.entries(working_hours).length > 0 ? (
                    <div className='grid grid-cols-3 gap-4'>
                      {Object.entries(working_hours).map(
                        ([day, hours], index) => (
                          <div key={index}>
                            <h3 className='font-semibold text-gray-800'>
                              {day}
                            </h3>
                            <ul className='text-gray-700'>
                              {hours.map((hour, idx) => (
                                <li key={idx}>{hour}</li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p className='text-gray-700'>No working hours available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='container p-4 mx-auto'>
            <div className='col-span-3 sm:col-span-2'>
              <h2 className='mb-4 text-2xl font-semibold text-gray-900 bg-red-400 '>
                Recent Reviews
              </h2>
              <div className='grid grid-cols-1 gap-4 mb-3 sm:grid-cols-2'>
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={index} className='p-4 border rounded-lg'>
                      <div className='flex items-center mb-2'>
                        <img
                          src={review.user_avatar}
                          alt={review.user_name}
                          className='w-10 h-10 mr-2 rounded-full'
                        />
                        <div>
                          <p className='font-bold'>{review.user_name}</p>
                          <p className='text-sm text-gray-500'>
                            {review.review_time}
                          </p>
                        </div>
                        <div className='flex items-center ml-auto'>
                          {Array.from(
                            { length: review.review_rate },
                            (_, index) => (
                              <IoStarSharp
                                key={index}
                                className='text-yellow-500'
                              />
                            )
                          )}
                        </div>
                      </div>
                      <p className='mb-2' style={{ textAlign: 'justify' }}>
                        {review.review_text}
                      </p>
                      {review.buisness_response_text && (
                        <div className='p-2 bg-gray-100 rounded'>
                          <strong>Response: </strong>
                          {review.buisness_response_text}
                        </div>
                      )}
                      {review.translations && review.translations.length > 0 && (
                        <div className='mt-2'>
                          <h3 className='text-sm font-semibold'>
                            Translations:
                          </h3>
                          {review.translations.map((translation, i) => (
                            <p key={i} className='text-sm text-gray-600'>
                              {translation}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No reviews available</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
