import React from 'react'
import { Link } from 'react-router-dom'


export default function (props) {
  return (
    <div className='items-container'>
      {props.cart.map(item => (
        <div className='row inner-container'>
          <Link to={`/product/${item.id}`}>
            <img className='cartImg p-4 align-self-center' src={item.api_featured_image} alt={item.image_link} />
          </Link>
          <h6 className='align-self-center'><b>{item.name}</b></h6>

          <button className='align-self-center'>-</button>
          <span className='align-self-center'>1</span>
          <button className='align-self-center'>+</button>


          <h4 className='align-self-center'>${item.price}</h4>
        </div>

      ))}
    </div>
  )
}
