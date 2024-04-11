import React from 'react'

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export default (areaTecnologiaTamanhoReduzido, quantidadeTecnologiasMaiorQue3, areaTecnologiasStyle)=>{
    if(quantidadeTecnologiasMaiorQue3){
        if (areaTecnologiasStyle == areaTecnologiaTamanhoReduzido){
            return (
                <IoMdArrowDropdown className='TecnologiasBotaoMostrarMaisIcone'/>
            )
        }else{
            return (
                <IoMdArrowDropup className='TecnologiasBotaoMostrarMaisIcone'/>
            )
        }
    }
}