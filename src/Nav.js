import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (

    <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-container">

          <Link className='text-dark nav-link' to="/">Home</Link>
          <Link className='text-dark nav-link' to="/allproducts">Shop All</Link>
          <Link className='text-dark nav-link' to="/allbrands">Brands</Link>
          <Link className='text-dark nav-link' to="/producttypes">Product Types</Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}
