import React from 'react'
import PageBanner from './PageBanner'
import image from '../assets/control.jpg'
import wip from '../assets/wip.webp'
const DashboardPage = () => {
  console.log('DashboardPage')
  return (
    <>
      <PageBanner
        title='Dashboard'
        subtitle='Welcome to the dashboard'
        image={image}
      />
      <div className='min-h-screen bg-gray-100'>
        <main className='px-4 py-6 mx-auto max-w-7xl'>
          <div className='flex flex-wrap -mx-4'>
            <aside className='w-full px-4 mb-8 md:w-1/4 md:mb-0'>
              <div className='p-4 bg-white rounded-lg shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Navigation</h2>
                <ul>
                  <li className='py-2'>
                    <a href='#' className='text-blue-500 hover:text-blue-700'>
                      Dashboard
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href='#' className='text-gray-500 hover:text-gray-700'>
                      Analytics
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href='#' className='text-gray-500 hover:text-gray-700'>
                      Reports
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content Area */}
            <section className='w-full px-4 md:w-3/4'>
              <div className='p-4 bg-white rounded-lg shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Recent Activity</h2>
                <img src={wip} alt='Work in progress' />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default DashboardPage
