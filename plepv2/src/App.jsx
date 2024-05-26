import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Home } from '../views/home'
import { RestaurantReviews } from './components/RestaurantReviews'
import Footer from './components/Footer.jsx'
import './App.css'
import AboutUs from './components/AboutUs.jsx'
import ScrollToTop from '../src/components/ScrollToTop.jsx'
import NearbyRestaurantsPage from './components/NearbyRestaurantsPage.tsx'
import SearchResults from './components/SearchResults.jsx'
import DashboardPage from './components/DashBoard.jsx'
import WriteReviewPage from './components/Write.jsx'
import LoginScreen from './components/Login.jsx'
import SignupScreen from './components/Register.jsx'

function App () {
  const [signedIn, setSignedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('signedIn')
    if (loggedIn === 'true') {
      setSignedIn(true)
    }
  }, [])

  const handleLogin = () => {
    setSignedIn(true)
    localStorage.setItem('signedIn', 'true')
  }

  const handleLogout = () => {
    setSignedIn(false)
    localStorage.removeItem('signedIn')
  }

  return (
    <>
      {signedIn && <Navbar onLogout={handleLogout} />}
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={signedIn ? <Home /> : <LoginScreen onLogin={handleLogin} />}
        />
        <Route
          path='/about'
          element={
            signedIn ? <AboutUs /> : <LoginScreen onLogin={handleLogin} />
          }
        />
        <Route
          path='/dashboard'
          element={
            signedIn ? <DashboardPage /> : <LoginScreen onLogin={handleLogin} />
          }
        />
        <Route
          path='/login'
          element={!signedIn ? <LoginScreen onLogin={handleLogin} /> : <Home />}
        />
        <Route
          path='/signup'
          element={!signedIn ? <SignupScreen /> : <Home />}
        />
        <Route
          path='/seereview/:id'
          element={
            signedIn ? (
              <RestaurantReviews />
            ) : (
              <LoginScreen onLogin={handleLogin} />
            )
          }
        />
        <Route
          path='/searchResults'
          element={
            signedIn ? <SearchResults /> : <LoginScreen onLogin={handleLogin} />
          }
        />
        <Route
          path='/nearby'
          element={
            signedIn ? (
              <NearbyRestaurantsPage />
            ) : (
              <LoginScreen onLogin={handleLogin} />
            )
          }
        />
        <Route
          path='/write'
          element={
            signedIn ? (
              <WriteReviewPage />
            ) : (
              <LoginScreen onLogin={handleLogin} />
            )
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
