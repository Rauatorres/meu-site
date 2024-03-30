import React from 'react'

import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

import Categoria from './components/Categoria'

import listaTecnologias from './listaTecnologias';

import exibirTecnologias from './script/exibirTecnologias'

export default props=>{
    const {frontEnd, backEnd, outro} = listaTecnologias

    return (
        <div className='AreaTecnologiasCategorias'>
            <Categoria titulo="Front-End" icone={<DevicesIcon className='TecnologiasCategoriaIcone'/>}>
                {exibirTecnologias(frontEnd)}
            </Categoria>
            <Categoria titulo="Back-End" icone={<StorageIcon className='TecnologiasCategoriaIcone'/>}>
                {exibirTecnologias(backEnd)}
            </Categoria>
            <Categoria titulo="Outro" icone={<MiscellaneousServicesIcon className='TecnologiasCategoriaIcone'/>}>
                {exibirTecnologias(outro)}
            </Categoria>
        </div>
    )
}