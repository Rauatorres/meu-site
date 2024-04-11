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

    return (
        <div className='Projeto'>
            <div 
                className='ProjetoImagem'
                style={{backgroundColor: imagemCor}}
            >
            </div>
            <div 
                className='ProjetoTitulo'
                style={{color: tituloCor}}
            >
                {props.titulo}
            </div>
            <div 
                className='ProjetoDescricao'
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