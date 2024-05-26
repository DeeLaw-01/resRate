import { FaUserCircle } from 'react-icons/fa'
import { IoIosCreate } from 'react-icons/io'
import { FaBookOpenReader } from 'react-icons/fa6'
import { IoSearchCircleSharp } from 'react-icons/io5'
import DropdownMenu from './DropdownMenu'
import { MdCancel } from 'react-icons/md'

import { useState } from 'react'
import PhoneSearch from './PhoneSearch'

const PhoneDrop = ({
  params,
  onLogout,
  searchForRestaurants,
  setDropdownOpen
}) => {
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    if (searchText.length < 1) {
      return
    }
    console.log(searchText, getUserState().userLocation)
    let userLocation = getUserState().userLocation
    let params = new URLSearchParams({
      searchText: searchText,
      userLocation: JSON.stringify(userLocation)
    }).toString()
    window.location.href = `/searchResults?${params}`
  }

  const handleNearbyClick = () => {
    window.location.href = `/nearby?${params}`
  }

  const handleWriteReviewClick = () => {
    window.location.href = '/write'
  }

  const handleDashboardClick = () => {
    window.location.href = '/dashboard'
  }

  return (
    <div className='absolute right-0 mt-2 text-black origin-top-right bg-white rounded-md shadow-lg w- bg- ring-1 ring-black ring-opacity-5'>
      <div
        className='flex flex-col items-center justify-center py-1'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='options-menu'
      >
        <ul>
          <li>
            <a
              onClick={handleNearbyClick}
              className='block px-4 py-2 text-sm hover:bg-gray-100'
              role='menuitem'
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Read <FaBookOpenReader />
              </span>
            </a>
          </li>
        </ul>
        <a
          onClick={handleWriteReviewClick}
          className='block px-4 py-2 text-sm hover:bg-gray-100'
          role='menuitem'
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Write <IoIosCreate size={18} />
          </span>
        </a>
        <a
          onClick={() => {
            setShowSearchBox(true)
            console.log('clicked search')
          }}
          className='block px-4 py-2 text-sm hover:bg-gray-100'
          role='menuitem'
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Search {<IoSearchCircleSharp size={24} />}
          </span>
        </a>
        {showSearchBox && (
          <>
            <PhoneSearch
              searchForRestaurants={searchForRestaurants}
              setShowSearchBox={setShowSearchBox}
            />
          </>
        )}
        <a
          onClick={handleDashboardClick}
          className='flex block px-4 py-2 text-sm hover:bg-gray-100'
          role='menuitem'
          onMouseEnter={() => console.log('hovered')}
        >
          Dashboard <FaUserCircle size={20} className='ml-2' />
        </a>
        <span className='px-4 py-1 text-white bg-red-500 rounded-md hover:bg-red-600'>
          <DropdownMenu onLogout={onLogout} />
        </span>
        <a
          onClick={() => {
            setDropdownOpen(false)
          }}
          className='block px-4 py-2 text-sm hover:bg-gray-100'
          role='menuitem'
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <MdCancel size={26} />
          </span>
        </a>
      </div>
    </div>
  )
}

export default PhoneDrop
