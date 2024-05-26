import React from 'react'
const SocialProof = () => {
  return (
    <section className='py-12 bg-gray-100 dark:bg-gray-900'>
      <div className='max-w-4xl px-4 mx-auto'>
        <h2 className='mb-8 text-3xl font-semibold text-center text-gray-900 md:text-4xl dark:text-white'>
          Trusted by Millions Worldwide
        </h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div className='relative'>
            <div className='p-6 text-center transition-transform bg-white rounded-lg shadow-lg dark:bg-gray-800 md:p-8 transform-gpu hover:scale-105'>
              <h3 className='mb-2 text-4xl font-semibold text-gray-900 md:text-5xl dark:text-gray-100'>
                73M+
              </h3>
              <p className='text-base font-medium text-gray-700 md:text-lg dark:text-gray-300'>
                Developers
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='p-6 text-center transition-transform bg-white rounded-lg shadow-lg dark:bg-gray-800 md:p-8 transform-gpu hover:scale-105'>
              <h3 className='mb-2 text-4xl font-semibold text-gray-900 md:text-5xl dark:text-gray-100'>
                1B+
              </h3>
              <p className='text-base font-medium text-gray-700 md:text-lg dark:text-gray-300'>
                Contributors
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='p-6 text-center transition-transform bg-white rounded-lg shadow-lg dark:bg-gray-800 md:p-8 transform-gpu hover:scale-105'>
              <h3 className='mb-2 text-4xl font-semibold text-gray-900 md:text-5xl dark:text-gray-100'>
                4M+
              </h3>
              <p className='text-base font-medium text-gray-700 md:text-lg dark:text-gray-300'>
                Organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
