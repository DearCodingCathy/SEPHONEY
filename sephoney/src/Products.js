import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
  return (
    <div className='card-container'>
      {/* <div className='col-9 mx-auto col-md-6 col-lg-3 my-3'> */}
      {props.products.map((product) =>

        <div className='card m-2' key={product.id}>

          <div className='img-container p-4'>
            <Link to={`/product/${product.id}`}>
              <img className='card-img-top' src={product.api_featured_image} alt={product.image_link} /></Link>
          </div>



          <button className='cart-btn' onClick={() => { props.func(product) }}
          >Add to Cart
            
          </button>



          <div className='card-footer d-flex justify-content-between'>
            <p className='text-dark text-decoration-none mb-0 align-self-center'>{product.name}</p>

            <h6 className='text-dark text-decoration-none'>${product.price}</h6>
          </div>
        </div>
      )}
    </div>
    // </div>
  )
}

