import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <img className='homeImg' src='https://i.imgur.com/EZbXlUc.jpg' alt='Makeup' />
      <Link to='/allproducts'><button>Shop Now</button></Link>
      
    </div>
  )
}
