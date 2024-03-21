import React,{ useState } from 'react'

import AreaSelecaoProjetos from './area_projetos/AreaSelecaoProjetos'
import Projeto from './area_projetos/Projeto'
import TecnologiaUsada from './area_projetos/TecnologiaUsada'

import listaProjetos from './listaProjetos'

import exibirBotoesSelecaoProjeto from './script/exibirBotoesSelecaoProjeto'
import exibirTecnologiasProjeto from './script/exibirTecnologiasProjeto'

export default props=>{
    const [projetoSelecionadoIndex, setProjetoSelecionadoIndex] = useState(0)
    const projetoSelecionado = listaProjetos[projetoSelecionadoIndex]

    return (
        <div>
            <AreaSelecaoProjetos>
                {exibirBotoesSelecaoProjeto(listaProjetos, setProjetoSelecionadoIndex)}
            </AreaSelecaoProjetos>
            <Projeto
                img={projetoSelecionado.imagem}
                titulo={projetoSelecionado.titulo}
                descricao={projetoSelecionado.descricao}
            >
                {/* <TecnologiaUsada nome="tecnologia"/>
                <TecnologiaUsada nome="tecnologia"/>
                <TecnologiaUsada nome="tecnologia"/> */}
                {exibirTecnologiasProjeto(projetoSelecionado)}
            </Projeto>
        </div>
    )
}