import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
  return (
    <div className='col-9 mx-auto col-md-6 col-lg-3 my-3'>

      {props.products.map(product =>
        <div className='card m-5' key={product.id}>



          <div className='img-container p-5'>
            <Link to={`/product/${product.id}`}>
              <img className='card-img-top' src={product.api_featured_image} alt={product.image_link} /></Link>
          </div>



          <button className='cart-btn' onClick={() => console.log('Added to cart!')}
          >Add to Cart
            <i className='fas fa-cart-plus' />
          </button>



          <div className='card-footer d-flex justify-content-between'>
            <p className='text-dark text-decoration-none mb-0 align-self-center'>{product.name}</p>

            <h6 className='text-dark text-decoration-none'>${product.price}</h6>
          </div>


        </div>
      )}
    </div>
  )
}

