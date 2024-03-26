import React from 'react'
import Navbar from '../geral/Navbar'
import Titulo from './conteudo/Titulo'
import AreaTecnologias from './conteudo/AreaTecnologias'

import './css/Tecnologias.css'

export default props=>
<section id='SecaoTecnologias' className='TecnologiasSecao'>
    <Navbar cor="Preto" posicao="Esquerda"/>
    <Titulo/>
    <AreaTecnologias/>
</section>