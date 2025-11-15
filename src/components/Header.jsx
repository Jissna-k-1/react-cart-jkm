import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Header() {
  return (
    <Navbar expand="lg" className="bg-primary position-fixed w-100">
      <Container>
        <Navbar.Brand> <Link to={'/'} className='text-decoration-none text-light fw-bold'> 
        <FontAwesomeIcon icon ={faTruckFast}/> Daily Cart </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto d-md-flex justify-content-center align-items-md-center"/>

            <Nav> <Link to={'/wishlist'} className='text-decoration-none text-light fw-bold d-flex align-items-center'> <FontAwesomeIcon icon={faHeart} className='text-danger'/> WISHLIST <Badge pill bg="dark" className='ms-1'>9</Badge> </Link>
            <Nav> <Link to={'/cart'} className='text-decoration-none text-light fw-bold ms-md-5 d-flex align-items-center'> <FontAwesomeIcon icon={faCartShopping} className='text-success me-1'/> CART 
            <Badge pill bg="dark" className='ms-1' >20</Badge> </Link>
            </Nav>

            <Nav.Link href="#link">Link</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
