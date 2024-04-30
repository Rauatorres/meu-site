import React from 'react'

import tecnologiasAreaMostrar from './tecnologiasAreaMostrar';

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export default (quantidadeTecnologiasMaiorQue3, areaTecnologiasTamanhoMaximo, areaTecnologiasTamanhoReduzido, areaTecnologiasStyle, setAreaTecnologiasStyle)=>{
    function mostrarBotaoDeAcordoComClique(){
        if (areaTecnologiasStyle == areaTecnologiasTamanhoReduzido){
            return (
                <IoMdArrowDropdown className='TecnologiasBotaoMostrarMaisIcone'/>
            )
        }else{
            return (
                <IoMdArrowDropup className='TecnologiasBotaoMostrarMaisIcone'/>
            )
        }
    }

    if(quantidadeTecnologiasMaiorQue3){
        return(
            <div 
                className='TecnologiasBotaoMostrarMais'
                onClick={()=>{
                        tecnologiasAreaMostrar(areaTecnologiasTamanhoMaximo, areaTecnologiasTamanhoReduzido, areaTecnologiasStyle, setAreaTecnologiasStyle)
                        
                    }
                }
            >
                {mostrarBotaoDeAcordoComClique()}
            </div>
        )
    }
}