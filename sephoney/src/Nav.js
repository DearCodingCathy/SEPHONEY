import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='d-flex justify-content-between navbar-expand{-sm|-md|-lg|-xl} nav-pills nav-fill '>
      <Link className='text-dark text-muted text-decoration-none' to='/allproducts'><h3>SHOP ALL</h3></Link>
      <Link className='text-dark text-muted text-decoration-none' to='/allbrands'><h3>BRANDS</h3></Link>
      <Link className='text-dark text-muted text-decoration-none' to='producttypes'><h3>PRODUCT TYPE</h3></Link>
      {/* <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  )
}
