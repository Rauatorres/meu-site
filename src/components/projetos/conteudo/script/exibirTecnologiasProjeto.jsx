import React from 'react'

import TecnologiaUsada from '../area_projetos/TecnologiaUsada'

export default projeto=>{
    return projeto.tecnologias.map(tecnologia=>{
        return (<TecnologiaUsada nome={tecnologia}/>)
    })
}