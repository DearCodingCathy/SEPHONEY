import React from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, NavDropdown } from 'react-bootstrap'

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


      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}


    </>
  )
}
