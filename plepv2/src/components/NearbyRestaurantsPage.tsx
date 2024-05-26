import React from 'react'
import { useLocation } from 'react-router-dom'

import { NearbyRestaurants } from './NearbyRestaurants'
import PageBanner from './PageBanner'
import '../App.css'
import image from '../assets/waitertakingorder.jpg'

export const NearbyRestaurantsPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const userLocation = JSON.parse(queryParams.get('userLocation') ?? '')
  console.log(userLocation)

  return (
    <>
      <PageBanner
        title='Nearby Restaurants'
        subtitle='Find the best restaurants near you'
        image={image}
      />

      <main className='p-4'>
        <NearbyRestaurants userlocation={userLocation} />
      </main>
    </>
  )
}

export default NearbyRestaurantsPage
