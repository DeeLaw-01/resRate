import React from 'react'
import Testimonial from './Testimonials' // Assuming Testimonial component is in a separate file
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  // Actual testimonial data
  const testimonials = [
    {
      author: 'John Doe',
      quote:
        'I found amazing new restaurants in my area using this platform. The reviews were incredibly helpful in making my dining decisions.',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      author: 'Jane Smith',
      quote:
        'This website has completely changed the way I explore restaurants. The user-friendly interface and detailed reviews make it easy to find great dining experiences.',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      author: 'Alice Johnson',
      quote:
        'As a food enthusiast, I appreciate the variety of restaurants and cuisines available on this platform. I highly recommend it to anyone looking to discover new dining options.',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ]

  return (
    <section className='py-12 bg-gray-100 dark:bg-gray-900'>
      <div className='max-w-4xl px-4 mx-auto'>
        <h2 className='mb-8 text-3xl font-semibold text-center text-gray-900 md:text-4xl dark:text-white'>
          Hear from Our Satisfied Customers
        </h2>
        <motion.div
          className='grid grid-cols-1 gap-6 md:grid-cols-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className='overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Testimonial {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
