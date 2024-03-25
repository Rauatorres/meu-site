import React from 'react'

import Navbar from '../geral/Navbar'
import Titulo from './conteudo/Titulo'
import AreaProjetos from './conteudo/AreaProjetos'

import './css/Projetos.css'

export default props=>
<section id='SecaoProjetos' className='ProjetosSecao'>
    <Navbar/>
    <Titulo/>
    <AreaProjetos/>
</section>