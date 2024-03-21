import React from 'react'

import BotaoSelecaoProjeto from '../area_projetos/BotaoSelecaoProjeto'

export default (listaProjetos, selecionarProjeto)=>{
    return listaProjetos.map((projeto, index)=>{
        return (
            <BotaoSelecaoProjeto 
                img={projeto.imagem}
                selecionarProjeto={selecionarProjeto}
                projetoIndex={index}
            />
        )
    })
}
