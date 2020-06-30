import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
  return (
    <div className='productContainer'>
      {props.products.map(product =>
        <Link to={`/product/${product.id}`}><div className='productDiv' key={product.id}>
          <img className='productImg' src={product.api_featured_image} alt={product.image_link} />
          <h4>{product.name}</h4>
          <h6>${product.price}</h6>
        </div></Link>
      )}
    </div>
  )
}
