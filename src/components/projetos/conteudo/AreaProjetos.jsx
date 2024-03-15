import React from 'react'

import AreaSelecaoProjetos from './area_projetos/AreaSelecaoProjetos'
import BotaoSelecaoProjeto from './area_projetos/BotaoSelecaoProjeto'
import Projeto from './area_projetos/Projeto'
import TecnologiaUsada from './area_projetos/TecnologiaUsada'

export default props=>
<div>
    Area de Projetos
    <AreaSelecaoProjetos>
        <BotaoSelecaoProjeto img="projeto1"/>
        <BotaoSelecaoProjeto img="projeto2"/>
        <BotaoSelecaoProjeto img="projeto3"/>
    </AreaSelecaoProjetos>
    <Projeto
        img="img do projeto"
        titulo="titulo"
        descricao="descrição"
    >
        <TecnologiaUsada nome="tecnologia"/>
        <TecnologiaUsada nome="tecnologia"/>
        <TecnologiaUsada nome="tecnologia"/>
    </Projeto>
</div>