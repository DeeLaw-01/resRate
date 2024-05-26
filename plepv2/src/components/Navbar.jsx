import logo from '../assets/logo.jpeg'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosCreate } from 'react-icons/io'
import { FaBookOpenReader } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { setUserIp, setUserLocation, getUserState } from '../state'
import { customerLocation, customerIp } from '../../importantStuff'
import DropdownMenu from './DropdownMenu'
import PhoneDropDown from './PhoneDrop.jsx'
import axios from 'axios'

export const Navbar = ({ onLogout }) => {
  const [scrolled, setScrolled] = useState(false)
  const [hidenav, setHidenav] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [params, setParams] = useState('')
  const [IPaddress, setIPaddress] = useState('')

  const searchForRestaurants = searchText => {
    console.log(IPaddress)
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

  useEffect(() => {
    const getCustomerIP = async () => {
      try {
        const response = await axios.get(customerIp)
        const data = response.data
        setIPaddress(data.ip)
        setUserIp(data.ip)
      } catch (error) {
        console.log('ERROR: Unable to fetch customer IP address', error)
      }
    }

    getCustomerIP()
  }, [])

  useEffect(() => {
    const getGeolocation = async () => {
      try {
        const response = await axios.get(`${customerLocation}/${IPaddress}`)
        console.log('setUseLocation')
        let temp = response.data
        setUserLocation(response.data)
        setParams(
          new URLSearchParams({
            userLocation: JSON.stringify(getUserState())
          }).toString()
        )
      } catch (error) {
        console.log('ERROR: Unable to fetch geolocation from IP address')
      }
    }
    getGeolocation()
  }, [IPaddress])

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const targethideposition = 620
      const targetPosition = targethideposition - 500

      if (scrollPosition >= targetPosition) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      if (scrollPosition >= targethideposition) {
        setHidenav(true)
      } else {
        setHidenav(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav>
        <div
          className={` top-0 left-0 z-100 flex navbar transition-all duration-700 w-100 ${
            scrolled ? 'h-10' : ' h-20'
          } ${hidenav ? 'hidden' : ''}`}
          id='navbar'
        >
          <div id='logoandlinks' className='flex items-center w-1/2 ml-2'>
            <a
              href='/'
              id='websitelogolink'
              className='flex items-center w-auto h-full'
            >
              <img
                src={logo}
                alt='website logo'
                id='websitelogo'
                className='object-contain h-12 w-fit-content'
              />
            </a>
            <ul
              id='navlinks '
              className='flex items-center justify-around w-auto h-full'
            >
              <li className='navitem'>
                <a href='/about'>About us</a>
              </li>
            </ul>
          </div>
          <div id='searchandicon' className='flex justify-end w-1/2'>
            <div
              className='flex items-center justify-around w-auto h-full mr-4 md:hidden'
              id='dropdowndiv'
            >
              <div className='relative inline-block text-left'>
                <button
                  className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                  onClick={handleDropdown}
                  id='dropdownbutton'
                >
                  <RxHamburgerMenu id='dropdownicon' />
                </button>

                {dropdownOpen && (
                  <PhoneDropDown
                    params={params}
                    onLogout={onLogout}
                    searchForRestaurants={searchForRestaurants}
                    setDropdownOpen={setDropdownOpen}
                  />
                )}
              </div>
            </div>
            <div className='flex hidden w-auto h-full md:flex' id='searchbox'>
              <input
                name='text'
                id='searchtext'
                className='input'
                placeholder='Search a Restaurant'
                autoComplete='off'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />

              <button
                className='search__btn'
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
            <ul
              id='navlinks2 '
              className='flex items-center justify-around hidden w-auto h-full md:flex'
            >
              <li className='navitem'>
                <a href='/write'>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Write <IoIosCreate />
                  </span>
                </a>
              </li>
              <li className='navitem'>
                <a href={`/nearby?${params}`}>
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

              <li
                className='relative flex items-center transition-all navitem duration-5000'
                onMouseDown={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <a
                  href='/dashboard'
                  className='flex items-center justify-center hover:bg-gray-600 '
                >
                  <FaUserCircle size={30} />
                </a>
                <span className='pl-4 '>
                  {showDropdown && <DropdownMenu onLogout={onLogout} />}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
