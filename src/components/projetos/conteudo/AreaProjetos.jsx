import React,{ useState } from 'react'

import AreaSelecaoProjetos from './area_projetos/AreaSelecaoProjetos'
import Projeto from './area_projetos/Projeto'
import AreaBotoes from './AreaBotoes'

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
            {exibirTecnologiasProjeto(projetoSelecionado)}
            </Projeto>
            <AreaBotoes 
                linkVerProjeto={projetoSelecionado.linkVisualizacao} 
                linkAcessarProjeto={projetoSelecionado.linkProjeto}
            />
        </div>
    )
}