import React from 'react'
// import {Link} from 'react-router-dom'

export default function ProductType(props) {
  const uniqueTypes = new Set(props.products.map(i => {
    return i.product_type
  }))
  console.log(uniqueTypes);
  return (
    <div className='d-flex flex-column align-items-center'>
      <h1> Shop by Product Type </h1>
      <p>Blush</p>
      <p>Bronzer</p>
      <p>Eyebrow</p>
      <p>Eyeliner</p>
      <p>Eyeshadow</p>
      <p>Foundation</p>
      <p>Lip liner</p>
      <p>Lipstick</p>
      <p>Mascara</p>
      <p>Nail Polish</p>
    </div>
  )
}
