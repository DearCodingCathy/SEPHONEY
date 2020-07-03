import React from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'


function ProductDetail(props) {
  const prod = props.products.find((product, index) => product.id === parseInt(props.match.params.id))

  if (prod) {
    return (
      <div className='main-detail-container'>
        <h1 className='detailName'>{prod.name}</h1>
        <div className='d-flex detailContainer'>
          <img className='detailImg rounded float-left' src={prod.api_featured_image} alt={prod.image_link} />

          <div className='detailInfo'>
            <h5> <b>Price:</b> ${prod.price}</h5>
            <p> <b>Brand:</b> {prod.brand}</p>
            <p> <b>Product Type:</b> {prod.product_type}</p>
            <p> <b>Description:</b> {prod.description}</p>

            <Link to='/cart'>
              <button className='cart-btn' onClick={() => props.func(prod)}
              > Add to Cart
            </button>
            </Link>

          </div>
        </div>
      </div>
    )
  } else {
    return <h1 className='loadingHelp'>Loading ...</h1>
  }
}

export default withRouter(ProductDetail)
