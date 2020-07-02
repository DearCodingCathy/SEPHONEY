import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

export default function Header() {
  return (
    <div className='d-flex justify-content-around'>
      <Search />
      <Link className='text-dark font-weight-lighter text-decoration-none text-center' to='/'><h1>SEPHONEY</h1> </Link>

      <Link className='text-dark text-decoration-none' to='/register'><h5><small>Sign In/ Register</small></h5></Link>

      <Link className='text-dark text-decoration-none' to='/cart'><h4> <small>My Cart</small></h4></Link>
    </div>
  )
}
