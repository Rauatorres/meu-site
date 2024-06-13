import React from 'react'

import { FaReact } from "react-icons/fa"
import { RiExternalLinkLine } from "react-icons/ri";

import './css/Footer.css'

export default props=>
<footer>
    <div className='FooterColuna FooterColunaDesenvolvedor'>
        <div className='FooterTitulo raleway-Fonte2'>Site feito por</div>
        <div className='FooterConteudo raleway-Fonte3'>Rauã Torres</div>
    </div>
    <div className='FooterColuna FooterColunaTecnologiasUsadas'>
        <div className='FooterTitulo raleway-Fonte2'>Feito com</div>
        <div className='FooterConteudo raleway-Fonte3'><FaReact/> <span className='FooterTecnologiaUsada'>ReactJS</span> </div>
    </div>
    <div className='FooterColuna FooterColunaRepositorio'>
        <div className='FooterTitulo raleway-Fonte2'>Repositório do site</div>
        <a className='FooterConteudo FooterLinkRepositorio raleway-Fonte3' target='__blank' href='https://github.com/Rauatorres/meu-site'>https://github.com/Rauatorres/meu-site <RiExternalLinkLine className='FooterLinkRepositorioIcone'/></a>
    </div>
</footer>