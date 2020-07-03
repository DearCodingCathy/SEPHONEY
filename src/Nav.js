import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (
    <>



      <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">

        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allproducts">Shop All</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/allbrands">Brands</Nav.Link>
            <Nav.Link href="/producttypes">Product Types</Nav.Link>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              {/* <Button variant="outline-primary">Search</Button> */}
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </>
  )
}
