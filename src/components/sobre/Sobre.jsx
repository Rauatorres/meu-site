import React from 'react'

import Navbar from '../geral/Navbar'
import MinhaImagem from './conteudo/MinhaImagem'
import Conteudo from './conteudo/Conteudo'

import './css/Sobre.css'

export default props=>
<section id='SecaoSobre' className='SobreSecao'>
    <Navbar cor="Branco" posicao="Direita"/>
    <MinhaImagem/>
    <Conteudo/>
</section>