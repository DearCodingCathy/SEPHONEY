import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

export default function Header() {
  return (
    <div className='d-flex justify-content-between'>
      <Search />
      <Link className='text-dark font-weight-lighter text-decoration-none text-center' to='/'><h1>SEPHONEY</h1> </Link>

      <Link className='text-dark text-decoration-none' to='/register'><h5>Sign In/ Register</h5></Link>

      <Link className='text-dark text-decoration-none' to='/cart'><h4>My Cart</h4></Link>

    </div>
  )
}
