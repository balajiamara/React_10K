import React from "react";
import {Navbar,Nav,Container, Image} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'


export function NavBar(){
    return(<>
    <Navbar expand="lg" bg="dark" data-bs-theme='dark'>
      <Container fluid className="px-5">
        <Navbar.Brand >
            <Image src={logo} width='50px' className='me-4'/>
            Thindhaam</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/'>Home</NavLink>
          </Nav>
            <NavLink to='/cart'>Cart</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}

