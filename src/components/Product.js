import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className='product'>
      <div className='productInfo'>
        <p>{title}</p>
        <p className='productPrice'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='productRating'>
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                <StarIcon className='ratingStar' />
              </p>
            ))}
        </div>
      </div>

      <img className='productImage' src={image} alt='product_image' />
      <button className='productButton'>Add to basket</button>
    </div>
  )
}

export default Product
