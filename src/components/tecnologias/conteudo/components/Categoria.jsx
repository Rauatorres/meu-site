import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import tecnologiasAreaMostrar from '../script/tecnologiasAreaMostrar.js'
import mostrarBotao from '../script/mostrarBotao.jsx'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default props=>{
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    var coeficienteDeTamanho = isMobile ? 12 : 5.1

    const [areaTecnologiasTamanhoMaximo, setAreaTecnologiasTamanhoMaximo] = useState(`${coeficienteDeTamanho * props.children.length}vw`)
    const [areaTecnologiasTamanhoReduzido, setAreaTecnologiasTamanhoReduzido] = useState(`${coeficienteDeTamanho * 3}vw`)
    const [areaTecnologiasStyle, setAreaTecnologiasStyle] = useState(areaTecnologiasTamanhoReduzido)

    const quantidadeTecnologiasMaiorQue3 = props.children.length > 3

    useEffect(()=>{
        setAreaTecnologiasTamanhoMaximo(`${coeficienteDeTamanho * props.children.length}vw`)
        setAreaTecnologiasTamanhoReduzido(`${coeficienteDeTamanho * 3}vw`)
    }, [coeficienteDeTamanho])

    useEffect(()=>{
        setAreaTecnologiasStyle(areaTecnologiasTamanhoReduzido)
    }, [areaTecnologiasTamanhoReduzido])

    return(
        <div className='TecnologiasCategoria'>
            <div className='TecnologiasCategoriaTitulo raleway-Fonte3'>{props.titulo}</div>
            <div className='TecnologiasCategoriaIconeBox'>{props.icone}</div>

            <div 
                className={`TecnologiasArea`}
                style={{height: quantidadeTecnologiasMaiorQue3 ? areaTecnologiasStyle : areaTecnologiasTamanhoMaximo}}
            >
                {props.children}
            </div>
            
            {/* <div 
                className='TecnologiasBotaoMostrarMais'
                onClick={()=>{
                        tecnologiasAreaMostrar(areaTecnologiasTamanhoMaximo, areaTecnologiasTamanhoReduzido, areaTecnologiasStyle, setAreaTecnologiasStyle)
                        
                    }
                }
            >
            </div> */}
                {mostrarBotao(quantidadeTecnologiasMaiorQue3, areaTecnologiasTamanhoMaximo, areaTecnologiasTamanhoReduzido, areaTecnologiasStyle, setAreaTecnologiasStyle)}
        </div>
    )
}