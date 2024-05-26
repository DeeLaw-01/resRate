import React, { useState } from 'react'
import PageBanner from './PageBanner'
import write from '../assets/write.jpg'

const WriteReviewPage = () => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleRatingChange = newRating => {
    setRating(newRating)
  }

  const handleCommentChange = e => {
    setComment(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission
    console.log('Rating:', rating)
    console.log('Comment:', comment)
    alert('THIS FUNCTION IS STILL UNDER CONSTRUCTION!!')
  }

  return (
    <>
      <PageBanner
        title='Write a Review'
        subtitle='Share your experience'
        image={write}
      />
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full p-8 bg-white rounded-lg shadow-md sm:w-1/2 lg:w-1/3'>
          <h1 className='mb-4 text-2xl font-semibold'>Write a Review</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='rating'
                className='block text-sm font-medium text-gray-700'
              >
                Rating
              </label>
              <div className='flex items-center'>
                <input
                  type='range'
                  id='rating'
                  name='rating'
                  min='0'
                  max='5'
                  step='0.1'
                  value={rating}
                  onChange={e => handleRatingChange(parseFloat(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
                <span className='ml-2 text-gray-700'>{rating.toFixed(1)}</span>
              </div>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='comment'
                className='block text-sm font-medium text-gray-700'
              >
                Comment
              </label>
              <textarea
                id='comment'
                name='comment'
                rows='4'
                value={comment}
                onChange={handleCommentChange}
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default WriteReviewPage
