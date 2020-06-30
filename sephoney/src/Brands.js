import React from 'react'
import { Link } from 'react-router-dom'

export default function Brands(props) {
  // const uniqueBrands = props.product.filter((item, index) => props.product.indexOf(item) !== index)

  // console.log(uniqueBrands)
  return (
    <div>
      {props.products.filter(brand => props.products.brand === brand.brand).map(brand => <h5>{brand.brand}</h5>)}
    </div>
  )
}
