import React, {useState} from 'react'
import { Navbar, Nav, Button, Offcanvas, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'


import Menu from './menu/Menu'

import './css/Header.css'

import Logo from './img/Logo.png'

export default props=>{
/*<header>
  <div className='AreaTitulo Fonte1'>
    <img className='Logo' src={Logo}/>
    <div className='TituloSite'>
      <h1 className='TituloCabecalho'>Rauã Torres</h1>
      <h2 className='SubtituloCabecalho Fonte2'>Web Developer</h2>
    </div>
  </div>
  <Menu/>
</header>*/
  
  return (
  <Navbar bg='dark' variant='dark' fixed='top' expand='sm'>
    <Container>
      <Navbar.Brand className='Fonte1' href='/'>Rauã Torres</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar'/>
      {/*<Navbar.Collapse id='navbar'>
      <Nav>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/sobre'>Sobre Mim</Nav.Link>
        <Nav.Link href='/projetos'>Meus Projetos</Nav.Link>
        <Nav.Link href='/contato'>Contato</Nav.Link>
      </Nav>
      </Navbar.Collapse>*/}
      <Navbar.Offcanvas id='navbar' placement='end' className='OffcanvasMenu'>
        <Offcanvas.Header className='OffcanvasHeader' closeVariant='white' closeButton/>
        <Offcanvas.Body>
          <Nav className='Fonte2'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/sobre'>Sobre Mim</Nav.Link>
            <Nav.Link href='/projetos'>Meus Projetos</Nav.Link>
            <Nav.Link href='/contato'>Contato</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}
