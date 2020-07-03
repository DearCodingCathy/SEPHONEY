import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className='home-container'>
      <img className='homeImg' src='https://i.imgur.com/YspOJf4.jpg' alt='Responsive image' />
      <Link to='/allproducts'><button className='btn btn-light btn-outline-secondary btn-lg'>Shop Now</button></Link>

    </div>
  )
}
