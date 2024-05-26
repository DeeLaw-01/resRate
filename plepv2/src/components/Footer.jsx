import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 text-white bg-gray-900'>
      <div className='max-w-6xl px-4 mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-bold'>ResRate</h3>
            <p className='mt-2'>Address: NUML,Lahore, Pakistan</p>
            <p>Phone: +92 3066505937</p>
            <p>Email: numl-f22-43048@numls.edu.pk </p>
          </div>
          <div>
            <h3 className='mb-2 text-xl font-bold'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                target='_blank'
                href='https://www.facebook.com/profile.php?id=61559370643485'
                className='text-white hover:text-gray-300'
              >
                Facebook
              </a>
              <a
                target='_blank'
                href='https://www.instagram.com/resrateofficial/'
                className='text-white hover:text-gray-300'
              >
                Instagram
              </a>
              <a href='#' className='text-white hover:text-gray-300'>
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className='mt-4 text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} ResRate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
