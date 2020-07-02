import React from 'react'
// import {Link} from 'react-router-dom'

export default function ProductType(props) {
  const uniqueTypes = new Set(props.products.map(i => {
    return i.product_type
  }))
  console.log(uniqueTypes);
  return (
    <div>
      <h1> This is where the product types will be! </h1>
    </div>
  )
}
