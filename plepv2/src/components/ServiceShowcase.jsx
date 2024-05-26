import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaSearch, FaStar } from 'react-icons/fa'

const FeaturesShowcase = () => {
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const threshold = windowHeight / 2

      if (scrollY > threshold) {
        controls.start({ opacity: 1, y: 0 })
      } else {
        controls.start({ opacity: 0, y: 20 })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  return (
    <section className='py-12 bg-gray-100 dark:bg-gray-900'>
      <div className='max-w-4xl px-4 mx-auto'>
        <h2 className='mb-8 text-3xl font-semibold text-center text-gray-900 md:text-4xl dark:text-white'>
          Discover the Features of Our Platform
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <motion.div
            className='flex items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 md:p-8'
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            <FaSearch className='mr-6 text-5xl text-gray-600' />
            <div>
              <h3 className='mb-2 text-xl font-semibold text-gray-900 md:text-2xl dark:text-gray-100'>
                Search and Discovery
              </h3>
              <p className='text-base text-gray-700 md:text-lg dark:text-gray-300'>
                Easily find restaurants based on location, cuisine type, price
                range, and ratings. Discover new dining options and read
                detailed reviews from other users.
              </p>
            </div>
          </motion.div>
          <motion.div
            className='flex items-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 md:p-8'
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <FaStar className='mr-6 text-5xl text-yellow-500' />
            <div>
              <h3 className='mb-2 text-xl font-semibold text-gray-900 md:text-2xl dark:text-gray-100'>
                User Reviews and Ratings
              </h3>
              <p className='text-base text-gray-700 md:text-lg dark:text-gray-300'>
                Write reviews and leave ratings for restaurants you've visited.
                Contribute to the community by sharing your dining experiences
                and helping others make informed decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesShowcase
