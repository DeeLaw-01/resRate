import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { RestaurantCard } from './RestaurantCard.jsx'
import { Loader } from './Loader.jsx'
import { searchMaps, mapDataHost, mapDataKey } from '../../importantStuff.js'
import PageBanner from './PageBanner.jsx'
import headerimage from '../assets/cheftalkingtocustomer.jpg'
function SearchResults () {
  const location = useLocation()
  const [searchResult, setSearchResult] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const searchText = queryParams.get('searchText')
    const userLocation = JSON.parse(queryParams.get('userLocation'))
    console.log(userLocation)
    setSearchText(searchText)

    const handleSearch = async () => {
      const options = {
        method: 'GET',
        url: searchMaps,
        params: {
          query: searchText,
          limit: '20',
          country: 'pk',
          lang: 'en',
          lat: userLocation.lat,
          lng: userLocation.lon,
          offset: '0',
          zoom: '13'
        },
        headers: {
          'X-RapidAPI-Key': mapDataKey,
          'X-RapidAPI-Host': mapDataHost
        }
      }

      try {
        const response = await axios.request(options)
        setSearchResult(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    handleSearch()
  }, [location])

  return (
    <>
      <PageBanner
        title='Search Results'
        subtitle='Find the best places to eat'
        image={headerimage}
      />
      <div>
        <h1 className='m-5 mt-5 text-2xl font-bold'>
          Search Results for {searchText}
        </h1>
        {searchResult.length === 0 ? (
          <div className='flex items-center justify-center h-screen'>
            <Loader />
          </div>
        ) : (
          <div
            id='nearbyrestaurants'
            className='grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          >
            {searchResult.data.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchResults
