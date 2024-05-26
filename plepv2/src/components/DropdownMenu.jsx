import React, { useState } from 'react'
import LogoutConfirmation from './LogoutConfirmation.jsx'

const DropdownMenu = ({ onLogout }) => {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleLogout = () => {
    setShowConfirmation(true)
  }

  const handleConfirmLogout = () => {
    onLogout()
    setShowConfirmation(false)
  }

  const handleCancelLogout = () => {
    setShowConfirmation(false)
  }

  return (
    <div className='dropdown-menu'>
      <button
        onClick={handleLogout}
        className='hover:bg-gray-600 dropdown-item'
      >
        Logout
      </button>
      {showConfirmation && (
        <LogoutConfirmation
          onConfirmLogout={handleConfirmLogout}
          onCancelLogout={handleCancelLogout}
        />
      )}
    </div>
  )
}

export default DropdownMenu
