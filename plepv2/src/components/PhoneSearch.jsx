import React from 'react'
import '../componentStyles/Modal.css'
import { MdCancel } from 'react-icons/md'

import { useState } from 'react'

const PhoneSearch = ({ searchForRestaurants, setShowSearchBox }) => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className='modal'>
      <div className='flex flex-col modal-content'>
        <div className='ml-auto '>
          <a
            onClick={() => {
              setShowSearchBox(false)
            }}
            className='block px-4 py-2 text-sm hover:bg-gray-100'
            role='menuitem'
          >
            <span>
              <MdCancel size={20} />
            </span>
          </a>
        </div>

        <h1>
          Search for a <strong>restaurant</strong>
        </h1>
        <div className='flex w-auto h-12 ' id='searchbox'>
          <input
            name='text'
            id='searchtext'
            className='bg-gray-200 input'
            placeholder='Search a Restaurant'
            autoComplete='off'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />

          <button
            className='bg-black h-9 search__btn'
            onClick={() => {
              searchForRestaurants(searchText)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='15'
              height='15'
            >
              <path
                d='M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                fill='#efeff1'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhoneSearch
