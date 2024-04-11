import React from 'react'

import BotaoSelecaoProjeto from '../area_projetos/BotaoSelecaoProjeto'

export default (listaProjetos, projetoEmSelecao, selecionarProjeto)=>{
    return listaProjetos.map((projeto, index)=>{
        return (
            <BotaoSelecaoProjeto 
                img={projeto.imagem}
                selecionarProjeto={selecionarProjeto}
                projetoIndex={index}
                width={projetoEmSelecao == index ? '80%' : '60%'}
                height={projetoEmSelecao == index ? '23%' : '17%'}
            />
        )
    })
}
