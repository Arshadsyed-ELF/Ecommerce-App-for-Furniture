
// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';

const Home = () => {
  const get = localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand href="/">Furniture-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
  
         
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item>  <Link to='/'>User</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Link to='/vlogin'>Vendor</Link> <br />  </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to='/alogin'>Admin</Link> <br /></NavDropdown.Item>   
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;
