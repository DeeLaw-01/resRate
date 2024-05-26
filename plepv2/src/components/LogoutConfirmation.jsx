import React from 'react'
import '../componentStyles/Modal.css'

const LogoutConfirmation = ({ onConfirmLogout, onCancelLogout }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1>
          Are you sure you want to <strong>Logout?</strong>
        </h1>
        <div className='buttons'>
          <button
            onClick={onConfirmLogout}
            className='px-4 py-2 mr-4 text-white bg-red-500 rounded-md hover:bg-red-600'
          >
            Yes, Logout
          </button>
          <button
            onClick={onCancelLogout}
            className='px-4 py-2 text-black rounded-md'
          >
            No, Stay
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirmation
