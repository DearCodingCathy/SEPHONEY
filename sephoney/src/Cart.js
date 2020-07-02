import React from 'react'
import { Link } from 'react-router-dom'


export default function (props) {


  if (props.cart) {
    return (
      <>
        <div className='items-container'>
          {props.cart.map((item, index) => (
            <div className='row inner-container'>
              <Link to={`/product/${item.id}`}>
                <img className='cartImg p-4 align-self-center' src={item.api_featured_image} alt={item.image_link} />
              </Link>
              <h6 className='align-self-center'><b>{item.name}</b></h6>

              <button className='align-self-center' onClick={e => props.qtyfunction(-1, index)}>-</button>
              <span className='align-self-center'>{item.quantity}</span>

              <button className='align-self-center' onClick={e => props.qtyfunction(1, index)}>+</button>
              <h4 className='align-self-center'>${item.price}</h4>
            </div>
          ))}
        </div>

        <div className='summary'>
          <h3>order summary</h3>
          <div>
            <strong>subtotal</strong>

            {/* <small> ({numItems} items)</small> */}

            <strong className='right'>${props.subtotal.toFixed(2)}</strong>
          </div>

          <div>
            <strong>estimated tax</strong>
            <strong className='right'>${props.taxtotal.toFixed(2)}</strong>
          </div>

          <hr />
          <h3>total <span className='right'>${props.ordertotal.toFixed(2)}</span></h3>

        </div>


      </>
    )
  } else {
    return <h1> Your Cart is currently empty</h1>
  }
}
