import React, { useState } from 'react'

import tecnologiasAreaMostrar from '../script/tecnologiasAreaMostrar.js'
import mostrarBotaoDeAcordoComClique from '../script/mostrarBotaoDeAcordoComClique'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default props=>{
    const areaTecnologiaTamanhoMaximo = `${props.children.length * 5.1}vw`
    const areaTecnologiaTamanhoReduzido = '16vw'
    const quantidadeTecnologiasMaiorQue3 = props.children.length > 3

    const [areaTecnologiasStyle, setAreaTecnologiasStyle] = useState(areaTecnologiaTamanhoReduzido)

    return(
        <div className='TecnologiasCategoria'>
            <div className='TecnologiasCategoriaTitulo'>{props.titulo}</div>
            <div className='TecnologiasCategoriaIconeBox'>{props.icone}</div>

            <div 
                className={`TecnologiasArea`}
                style={{height: quantidadeTecnologiasMaiorQue3 ? areaTecnologiasStyle : areaTecnologiaTamanhoMaximo}}
            >
                {props.children}
            </div>
            
            <div 
                className='TecnologiasBotaoMostrarMais'
                onClick={()=>{
                    tecnologiasAreaMostrar(areaTecnologiaTamanhoMaximo, areaTecnologiaTamanhoReduzido, areaTecnologiasStyle, setAreaTecnologiasStyle)}
                }
            >
                {mostrarBotaoDeAcordoComClique(areaTecnologiaTamanhoReduzido, quantidadeTecnologiasMaiorQue3, areaTecnologiasStyle)}
            </div>
        </div>
    )
}