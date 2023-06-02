import React, { useState } from 'react'
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import Menu from './menu/Menu'

import './css/Header.css'

import Logo from './img/Logo.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

export default props =>
  <Navbar expand='sm'>
    <Container>
      <Navbar.Brand>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar'/>
      <Navbar.Collapse id='navbar'>
        <Nav>
          <Nav.Link href='/'>home</Nav.Link>
          <Nav.Link href='/projetos'>projetos</Nav.Link>
          <Nav.Link href='/contato'>contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>