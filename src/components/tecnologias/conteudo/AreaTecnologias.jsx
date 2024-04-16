import React from 'react'

import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { MdDevices } from "react-icons/md";
import { IoServer } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";

import Categoria from './components/Categoria'

import listaTecnologias from './listaTecnologias';

import exibirTecnologias from './script/exibirTecnologias'

export default props=>{
    const {frontEnd, backEnd, outro} = listaTecnologias

    return (
        <div className='AreaTecnologiasCategorias'>
            <Categoria titulo="Front-End" icone={<MdDevices className='TecnologiasCategoriaIcone'/>}>
                {exibirTecnologias(frontEnd)}
            </Categoria>
            <Categoria titulo="Back-End" icone={<IoServer className='TecnologiasCategoriaIcone'/>}>
                {exibirTecnologias(backEnd)}
            </Categoria>
            <Categoria titulo="Outro" icone={<MdMiscellaneousServices className='TecnologiasCategoriaIcone'/>}>
                {exibirTecnologias(outro)}
            </Categoria>
        </div>
    )
}