import { Button } from 'react-bootstrap';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
// import { Link } from 'react-router-dom';


const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={HashLink} to="/home#home">
          <div>
            <h1  style={{color: 'white', fontSize: 40}} >Tour<span className='text-danger'>X</span></h1>
          </div>
    </Navbar.Brand>
    <Nav className="me-auto mx-5 fs-5">
      <Nav.Link  as={HashLink} to="/home#home">HOME </Nav.Link>
      <Nav.Link  as={HashLink} to="/plans#plans">PLANS </Nav.Link>
      
    </Nav>

    <Nav className="fs-5 m-0">
    <Navbar.Text>
    
        {!user.name && <div className="d-flex">
         <h2>{user.name}</h2>
          <p>{user.email}</p>
        
      </div>
      }

      {user?.email ?
        <Button className="mx-1" onClick={logOut} variant="primary">Logout</Button> :
        <Nav.Link><div className="d-flex">
        <Nav.Link as={HashLink} to="/login">LOGIN</Nav.Link>
        </div> 
        </Nav.Link>
        }
    </Navbar.Text>
    </Nav>

    </Container>
  </Navbar>
        </div>
    );
};

export default Header;