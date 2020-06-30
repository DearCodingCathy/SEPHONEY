import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className= 'navigation'>
      <Link to='/allproducts'><h3>SHOP ALL</h3></Link> 
      <Link to='/allbrands'><h3>BRANDS</h3></Link>
      <Link to='producttypes'><h3>PRODUCT TYPE</h3></Link>
    </div>
  )
}
