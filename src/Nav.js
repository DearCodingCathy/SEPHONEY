import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to='/' class="nav-link">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link to='/allproducts' class="nav-link" >Shop All</Link>
            </li>
            <li class="nav-item active">
              <Link to='/allbrands' class="nav-link" tabindex="-1">Brands</Link>
            </li>
            <li class="nav-item active">
              <a class="nav-link">Product Type</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-md-0">
            <input class="form-control" type="text" placeholder="Search" />
          </form>
        </div>
      </nav>
    </>
  )
}
