import React, { useState, useEffect } from 'react'

export default props=>{
    const [imagemCor, setImagemCor] = useState('grey')
    const [tituloCor, setTituloCor] = useState('white')
    const [descricaoCor, setDescricaoCor] = useState('white')
    const [tecnologiasUsadasStyle, setTecnologiasUsadasStyle] = useState('FadeOut')

    useEffect(()=>{
        let corTransparente = 'rgba(0, 0, 0, 0)'
        if(props.estadoTransicao == 'fade in'){
            setImagemCor(corTransparente)
            setTituloCor(corTransparente)
            setDescricaoCor(corTransparente)
            setTecnologiasUsadasStyle('FadeIn')
        }else{
            setImagemCor('grey')
            setTituloCor('white')
            setDescricaoCor('white')
            setTecnologiasUsadasStyle('FadeOut')
        }
    }, [props.estadoTransicao])

    function verifProjetoFinalizado(returnFinalizado, returnNaoFinalizado){
        if(props.finalizado){
            return returnFinalizado
        }else{
            return returnNaoFinalizado
        }
    }

    return (
        <div className='Projeto'>
            {verifProjetoFinalizado(
                (
                    <img className='ProjetoImagemFinalizado' src={props.imagem} alt="" />
                ),
                (
                    <div 
                        className='ProjetoImagemNaoFinalizado'
                        style={{backgroundColor: imagemCor}}
                    >
                        Projeto em desenvolvimento...
                    </div>
                )
            )}
            <div 
                className='ProjetoTitulo raleway-Fonte3'
                style={{color: tituloCor}}
            >
                {props.titulo}
            </div>
            <div 
                className='ProjetoDescricao raleway-Fonte4'
                style={{color: descricaoCor}}
            >
                {props.descricao}
            </div>
            <div 
                className={'ProjetoTecnologias ' + tecnologiasUsadasStyle}
            >
                {props.children}
            </div>
        </div>
    )
}