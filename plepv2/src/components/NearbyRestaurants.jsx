import { useState, useEffect } from 'react'
import { RestaurantCard } from './RestaurantCard.jsx'
import { Loader } from './Loader.jsx'
import axios from 'axios'
import {
  nearbyRestaurants,
  mapDataHost,
  mapDataKey
} from '../../importantStuff.js'
import '../App.css'

export const NearbyRestaurants = ({ userlocation }) => {
  const [NearbyRestaurants, setNearbyRestaurants] = useState([])
  const userLocation = userlocation.userLocation
  useEffect(() => {
    setTimeout(() => {
      // ?wait for geoLocation to set
      const getNearbyRestaurants = async () => {
        const options = {
          method: 'GET',
          url: nearbyRestaurants,
          params: {
            query: 'restaurant',
            lat: userLocation.lat,
            lng: userLocation.lon,
            limit: '20',
            country: userLocation.countryCode,
            lang: 'en',
            offset: '0',
            zoom: '12'
          },
          headers: {
            'X-RapidAPI-Key': mapDataKey,
            'X-RapidAPI-Host': mapDataHost
          }
        }
        console.log('options:', options)
        try {
          console.log('reached here')
          const response = await axios.request(options)
          console.log(response.data)
          setNearbyRestaurants(response.data)
        } catch (error) {
          console.error('ERROR: Unable to fetch nearby restaurants')
        }
      }
      getNearbyRestaurants()
    }, 1000)
  }, [])

  return (
    <>
      {NearbyRestaurants.length === 0 ? (
        <div className='flex items-center justify-center h-screen'>
          <Loader />
        </div>
      ) : (
        <div id='nearbyrestaurants' className='mt-5'>
          {NearbyRestaurants.data.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      )}
    </>
  )
}
