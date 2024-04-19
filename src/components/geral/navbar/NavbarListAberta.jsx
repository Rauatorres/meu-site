import React from 'react'

import NavbarButton from './NavbarButton'

export default props=>
<ul className='NavbarListAberta' style={{height: props.altura}}>
    <li>
        <NavbarButton nome="Sobre" elemento="SecaoSobre" />
    </li>
    <li>
        <NavbarButton nome="Tecnologias" elemento="SecaoTecnologias" />
    </li>
    <li>
        <NavbarButton nome="Projetos" elemento="SecaoProjetos" />
    </li>
    <li>
        <NavbarButton nome="Contato" elemento="SecaoContato" />
    </li>
    {props.botaoFecharMenu}
</ul>