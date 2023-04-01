import React from 'react'

import Menu from './menu/Menu'

import './css/Header.css'

import Logo from './img/Logo.png'

export default props=>
<header>
  <div className='AreaTitulo Fonte1'>
    <img className='Logo' src={Logo}/>
    <div className='TituloSite'>
      <h1 className='TituloCabecalho'>Rauã Torres</h1>
      <h2 className='SubtituloCabecalho Fonte2'>Web Developer</h2>
    </div>
  </div>
  <Menu/>
</header>