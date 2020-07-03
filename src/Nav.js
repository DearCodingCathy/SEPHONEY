import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseTarget" aria-controls="collapseTarget" aria-expanded="false" aria-label="Toggle navigation">


          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="collapseTarget">


          <ul className="navbar-nav mr-auto">

            <li className="nav-item active">

              <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>


            </li>
            <li className="nav-item active">

              <Link to='/allproducts' className="nav-link" >Shop All</Link>

            </li>
            <li className="nav-item active">

              <Link to='/allbrands' className="nav-link" tabIndex="-1" aria-disabled="true">Brands</Link>

            </li>
            <li className="nav-item active">

              <Link to='/producttypes' className="nav-link">Product Type</Link>

            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">

            <input className="form-control" type="text" placeholder="Search" />

          </form>
        </div>
      </nav>





    </>
  )
}
