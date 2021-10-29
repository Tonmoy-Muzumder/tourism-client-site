import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
             <Navbar bg="light" variant="white">
    <Container>
    <Navbar.Brand as={HashLink} to="/home#home">
    <div>
            <h1  style={{color: 'gray'}} className='m-0'>Tour<span className='text-danger'>X</span></h1>
        </div>
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  as={HashLink} to="/home#home">HOME</Nav.Link>
      <Nav.Link  as={HashLink} to="/plans#plans">PLANS</Nav.Link>
      <Nav.Link  as={HashLink} to="/login">LOGIN</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;