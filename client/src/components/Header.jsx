import React, { useState } from 'react'
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import Menu from './menu/Menu'

import './css/Header.css'

import Logo from './img/Logo.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

export default props =>
  <Navbar expand='sm' className="Navbar" variant='dark'>
    <Container>
      <Navbar.Brand>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar' className='MenuButton'/>
      <Navbar.Collapse id='navbar'>
        <Nav>
          <Nav.Link className='NavLink' href='/'>home</Nav.Link>
          <Nav.Link className='NavLink' href='/projetos'>projetos</Nav.Link>
          <Nav.Link className='NavLink' href='/contato'>contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>