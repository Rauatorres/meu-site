import React from 'react'

import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"   
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { DiMysql } from "react-icons/di"
import { SiPostgresql } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const listaTecnologias = {
    frontEnd: [
        { icone: (<FaHtml5 className='TecnologiaIcone'/>), nome: "HTML"},
        { icone: (<FaCss3Alt className='TecnologiaIcone'/>), nome: "CSS"},
        { icone: (<SiJavascript className='TecnologiaIcone'/>), nome: "Javascript"},
        { icone: (<FaReact className='TecnologiaIcone'/>), nome: "React.JS"},
        { icone: (<FaBootstrap className='TecnologiaIcone'/>), nome: "Bootstrap"},
        { icone: (<FaFigma className='TecnologiaIcone'/>), nome: "Figma"}
    ],
    backEnd: [
        { icone: (<FaNodeJs  className='TecnologiaIcone'/>), nome: "Node.js"},
        { icone: (<SiExpress className='TecnologiaIcone'/>), nome: "Express"},
        { icone: (<SiMongodb  className='TecnologiaIcone'/>), nome: "MongoDB"},
        { icone: (<DiMysql  className='TecnologiaIcone'/>), nome: "MySQL"},
        { icone: (<SiPostgresql  className='TecnologiaIcone'/>), nome: "PostgreSQL"}
    ],
    outro: [
        { icone: (<FaGitAlt className='TecnologiaIcone'/>), nome: "Git"},
        { icone: (<FaGithub className='TecnologiaIcone'/>), nome: "Github"}
    ]
}

export default listaTecnologias