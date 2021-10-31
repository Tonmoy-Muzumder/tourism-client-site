import { Button } from 'react-bootstrap';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import { Link } from 'react-router-dom';


const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <div>
<Navbar fixed="top"collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  as={HashLink} to="/home#home"> <div>
            <h1  style={{color: 'white', fontSize: 40}} >Tour<span className='text-danger'>X</span></h1>
          </div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  as={HashLink} to="/home#home">HOME</Nav.Link>
      <Nav.Link   as={HashLink} to="/home#plans">PLANS </Nav.Link>
      <Nav.Link   as={HashLink} to="/home#blogs">BLOGS </Nav.Link>
      <Nav.Link   as={HashLink} to="/home#aboutUs"> ABOUT US </Nav.Link>
    </Nav>
    <Nav>
    <Navbar.Text className="d-flex">
  {user?.email ?
  <NavDropdown title="DASHBOARD" id="collasible-nav-dropdown">
  <NavDropdown.Item className="text-primary fs-5" as={HashLink} to="/myplans">MY PLANS</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item className="text-primary fs-5"  as={HashLink} to="/managePlans">MANAGE ALL PLANS</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item className="text-primary fs-5"  as={HashLink} to="/addnewplan">+ ADD A NEW PLAN</NavDropdown.Item>
  <NavDropdown.Divider />
  {!user.name && <div className="d-flex">
      <p style={{marginTop: 5}}>USER: <br /> {user.email}</p>
    
  </div>
  }
  <Button className="mx-1" onClick={logOut} variant="primary">Logout</Button>
</NavDropdown> :
     
    <Nav.Link><div className="d-flex">
    <Nav.Link as={HashLink} to="/login">LOGIN</Nav.Link>
    </div> 
    </Nav.Link>
    }
</Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<br />
<br />
<br />
<br />


        </div>
    );
};

export default Header;