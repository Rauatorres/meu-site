import React from 'react'
import { useMediaQuery } from 'react-responsive'

import BotaoSelecaoProjeto from '../area_projetos/BotaoSelecaoProjeto'

export default (listaProjetos, projetoEmSelecao, selecionarProjeto)=>{
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})


    function dimensaoBotao(dimensao, index){
        if(dimensao == 'width'){
            if (isMobile){
                return projetoEmSelecao == index ? '22vw' : '15vw'
            }else{
                return projetoEmSelecao == index ? '80%' : '60%'
            }

        }else if (dimensao == 'height'){
            if (isMobile){
                return projetoEmSelecao == index ? '11vw' : '8vw'
            }else{
                return projetoEmSelecao == index ? '23%' : '17%'
            }
        }
    }

    return listaProjetos.map((projeto, index)=>{
        return (
            <BotaoSelecaoProjeto 
                img={projeto.imagem}
                selecionarProjeto={selecionarProjeto}
                projetoIndex={index}
                width={dimensaoBotao('width', index)}
                height={dimensaoBotao('height', index)}
                projetoFinalizado={projeto.finalizado}
            />
        )
    })
}
