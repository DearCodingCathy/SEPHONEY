import React from 'react'
import { Link } from 'react-router-dom'

export default function Brands(props) {
  return (
    <div>
      {props.products.map(brand => <h5>{brand.brand}</h5>)}
    </div>
  )
}
