import React,{ useState, useEffect } from 'react'

import AreaSelecaoProjetos from './area_projetos/AreaSelecaoProjetos'
import Projeto from './area_projetos/Projeto'
import AreaBotoes from './AreaBotoes'

import listaProjetos from './listaProjetos'

import exibirBotoesSelecaoProjeto from './script/exibirBotoesSelecaoProjeto'
import exibirTecnologiasProjeto from './script/exibirTecnologiasProjeto'

export default props=>{
    const [projetoSelecionadoIndex, setProjetoSelecionadoIndex] = useState(0)
    const [projetoEmSelecaoIndex, setProjetoEmSelecaoIndex] = useState(0)
    const [transicao, setTransicao] = useState('')
    const projetoSelecionado = listaProjetos[projetoSelecionadoIndex]

    function selecionarProjeto(projetoIndex){
        setProjetoEmSelecaoIndex(projetoIndex)
        setTransicao('fade in')
        setTimeout(()=>{
            setProjetoSelecionadoIndex(projetoIndex)
            setTransicao('fade out')
        }, 1000)
    }

    return (
        <div className='AreaProjetos'>
            <AreaSelecaoProjetos>
                {exibirBotoesSelecaoProjeto(listaProjetos, projetoEmSelecaoIndex, selecionarProjeto)}
            </AreaSelecaoProjetos>
            <Projeto
                estadoTransicao={transicao}
                img={projetoSelecionado.imagem}
                titulo={projetoSelecionado.titulo}
                descricao={projetoSelecionado.descricao}
            >
            {exibirTecnologiasProjeto(projetoSelecionado)}
            </Projeto>
            <AreaBotoes 
                linkVerProjeto={projetoSelecionado.linkVisualizacao} 
                linkAcessarProjeto={projetoSelecionado.linkProjeto}
            />
        </div>
    )
}