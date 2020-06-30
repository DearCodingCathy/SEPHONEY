import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <input className='search' type='text' placeholder='Search'></input>
      <Link to='/'><h1>SEPHONEY</h1> </Link>

      <Link to='/register'><h5>Sign In/ Register</h5></Link>

      <Link to='/cart'><h4>My Cart</h4></Link>

    </div>
  )
}
