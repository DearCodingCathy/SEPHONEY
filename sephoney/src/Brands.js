import React from 'react'
// import { Link } from 'react-router-dom'

export default function Brands(props) {
  const uniqueBrands = new Set(props.products.map(i => {
    return i.brand
  }))
  console.log(uniqueBrands);
  return (
    <div>
    </div>
  )
}
