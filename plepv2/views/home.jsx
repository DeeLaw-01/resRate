import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Slideshow } from '../src/components/slideshow.jsx'
import '../src/App.css'
import SocialProof from '../src/components/socialproof.jsx'
import { setUserIp, setUserLocation, getUserState } from '../src/state'
import { customerLocation, customerIp } from '../importantStuff'
import FeaturesShowcase from '../src/components/ServiceShowcase.jsx'

import TestimonialsSection from '../src/components/TestimonialSection.jsx'
export const Home = () => {
  const [IPaddress, setIPaddress] = useState('')

  useEffect(() => {
    const getCustomerIP = async () => {
      try {
        const response = await axios.get(customerIp)
        const data = response.data
        setIPaddress(data.ip)
        setUserIp(data.ip)
      } catch (error) {
        console.log('ERROR: Unable to fetch customer IP address')
      }
    }

    getCustomerIP()
  }, [])

  useEffect(() => {
    const getGeolocation = async () => {
      try {
        const response = await axios.get(`${customerLocation}/${IPaddress}`)
        console.log('setUseLocation')
        setUserLocation(response.data)
      } catch (error) {
        console.log('ERROR: Unable to fetch geolocation from IP address')
      }
    }
    getGeolocation()
  }, [IPaddress])

  return (
    <>
      <Slideshow userState={getUserState()} />
      <SocialProof />
      <FeaturesShowcase />
      <TestimonialsSection />
    </>
  )
}
