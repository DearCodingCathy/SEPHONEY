import React from 'react'
import { withRouter } from 'react-router';


function ProductDetail(props) {
  const prod = props.products.find((product, index) => product.id === parseInt(props.match.params.id))

  if (prod) {
    return (
      <>
        <h1 className='detailName'>{prod.name}</h1>
        <div className='detailContainer'>
          <img className='detailImg' src={prod.api_featured_image} alt={prod.image_link} />

          <div className='detailInfo'>
            <h5> <b>Price:</b> ${prod.price}</h5>
            <p> <b>Brand:</b> {prod.brand}</p>
            <p> <b>Product Type:</b> {prod.product_type}</p>
            <p> <b>Description:</b> {prod.description}</p>

            <button className='cart-btn' onClick={() => props.func(prod)}
            > Add to Cart
            </button>

          </div>
        </div>
      </>
    )
  } else {
    return <h1 className='loadingHelp'>Loading ...</h1>
  }
}

export default withRouter(ProductDetail)
