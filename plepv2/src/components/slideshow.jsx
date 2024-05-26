import React from 'react'
import image1 from '../assets/slideshow/1.png'
import image2 from '../assets/slideshow/2.png'
import image3 from '../assets/slideshow/3.png'
import image4 from '../assets/slideshow/4.png'
import { Carousel } from 'flowbite-react'

export const Slideshow = ({ userState }) => {
  const handleButtonClick = () => {
    let params = new URLSearchParams({
      userLocation: JSON.stringify(userState)
    }).toString()
    window.location.href = `/nearby?${params}`
  }
  console.log('user state:', userState)
  return (
    <div className='relative '>
      <Carousel
        indicators={true}
        draggable={false}
        id='slideshow'
        autoPlay={true}
        pauseOnHover={true}
        wrap='wrap'
        className='h-96'
      >
        <div className='flex items-center justify-center h-full'>
          <img
            src={image1}
            alt='Waiter taking order'
            className='object-cover object-top w-full h-full'
          />
        </div>
        <div className='flex items-center justify-center h-full'>
          <img
            src={image2}
            alt='Customer talking to chef'
            className='object-cover object-top w-full h-full'
          />
        </div>
        <div className='flex items-center justify-center h-full'>
          <img
            src={image3}
            alt='Waiter taking order'
            className='object-cover object-top w-full h-full'
          />
        </div>
        <div className='flex items-center justify-center h-full'>
          <img
            src={image4}
            alt='Customer talking to chef'
            className='object-cover object-top w-full h-full'
          />
        </div>
      </Carousel>
      <div className='absolute inset-x-0 flex justify-center bottom-10'>
        <button
          onClick={handleButtonClick}
          className='px-4 py-2 text-base font-semibold text-white transition-transform duration-300 transform bg-blue-600 rounded-full shadow-lg bg-opacity-80 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-5 lg:text-2xl'
        >
          Find Restaurants Near Me
        </button>
      </div>
    </div>
  )
}
