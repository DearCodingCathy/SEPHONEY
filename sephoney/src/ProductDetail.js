import React from 'react'
import { withRouter } from 'react-router';


function ProductDetail(props) {
  const prod = props.products.find(product => product.id === parseInt(props.match.params.id))
  // console.log(prod)
  return (
    <div className='detailContainer'>
      {/* <h1>{prod.name}</h1>
      <img src={prod.api_featured_image} alt={prod.image.link} />

      <p>{prod.brand}</p>
      <p>{prod.product_type}</p>
      <p>{prod.description}</p>
      <h5>{prod.price}</h5> */}

    </div>
  )
}

export default withRouter(ProductDetail)
