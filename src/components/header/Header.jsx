import React from 'react'
import Navbar from '../geral/Navbar'
import Apresentacao from './conteudo/Apresentacao'

import './css/Header.css'

export default props=>
<header className='Header'>
    <Navbar cor="Preto" posicao="Esquerda"/>
    <Apresentacao/>
</header>