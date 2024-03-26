import React from 'react'

import Navbar from '../geral/Navbar'
import Titulo from './conteudo/Titulo'
import AreaContato from './conteudo/AreaContato'

import './css/Contato.css'

export default props=>
<section id='SecaoContato' className='ContatoSecao'>
    <Navbar cor='Branco' posicao='Esquerda'/>
    <Titulo/>
    <AreaContato/>
</section>