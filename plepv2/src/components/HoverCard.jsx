import React from 'react'
import '../componentStyles/HoverCard.css'
const ProductCard = ({ text, secondaryText }) => {
  return (
    <div className='card'>
      <p className='card-title'> {text}</p>
      <p className='small-desc'>{secondaryText}</p>
      <div className='go-corner'>
        <div className='go-arrow'>→</div>
      </div>
    </div>
  )
}

export default ProductCard
