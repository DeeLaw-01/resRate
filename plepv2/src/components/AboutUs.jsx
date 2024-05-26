import React from 'react'
import { motion } from 'framer-motion'
import numl from '../assets/NUML.jpg'
import wahab from '../assets/Wahab.jpg'
import waleed from '../assets/waleed.jpg'
import PageBanner from './PageBanner'
const AboutUs = () => {
  return (
    <section className='py-12 bg-gray-100 dark:bg-gray-900'>
      <div className='max-w-6xl px-4 mx-auto'>
        <motion.div
          className='mb-12 text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PageBanner
            title='About Us'
            subtitle='Find out more about the minds behind ResRate'
            image={numl}
          />
        </motion.div>

        <motion.div
          className='grid grid-cols-1 gap-8 mb-12 md:grid-cols-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <img
              src={waleed}
              alt='Waleed Ahmed Butt'
              className='w-32 h-32 mx-auto mb-4 rounded-full shadow-lg'
            />
            <h2 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100'>
              Waleed Ahmed Butt
            </h2>
            <p className='text-gray-700 dark:text-gray-300'>
              I am a 4th semester student at National University of Modern
              Languages, Lahore campus. With a passion for technology and food,
              I realized the need for a Yelp alternative in Pakistan.
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <img
              src={wahab}
              alt='Abdul Wahab'
              className='w-32 h-32 mx-auto mb-4 rounded-full shadow-lg'
            />
            <h2 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100'>
              Abdul Wahab
            </h2>
            <p className='text-gray-700 dark:text-gray-300'>
              As Waleed's project partner, I share his vision of creating a
              platform for foodies in Pakistan. Together, we aim to provide a
              space where users can communicate freely and find like-minded
              foodies to review even the smallest restaurants in Pakistan.
            </p>
          </div>
        </motion.div>

        <motion.div
          className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <h2 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100'>
            Our Motivation
          </h2>
          <p className='text-gray-700 dark:text-gray-300'>
            We realized that there is no Yelp alternative for Pakistan, and most
            foodies have to resort to visiting ESR (Eat Sleep Repeat), a
            Facebook page with a very authoritative admin. After experiencing
            several clashes with the admin myself, we wanted to create a space
            where users can communicate freely and find like-minded foodies to
            review even the smallest restaurants in Pakistan.
          </p>
        </motion.div>

        <motion.div
          className='p-6 mt-12 bg-white rounded-lg shadow-lg dark:bg-gray-800'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <h2 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100'>
            Our Vision
          </h2>
          <p className='text-gray-700 dark:text-gray-300'>
            Our vision is to create a user-friendly platform where foodies can
            connect, share reviews, and discover new dining experiences. We aim
            to build a community where every restaurant, big or small, gets the
            recognition it deserves, and where users can find honest and
            reliable reviews from fellow food enthusiasts.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
