import React from 'react'

import Tecnologia from '../components/Tecnologia'

export default tecnologiasListaTipoObj=>{
    return tecnologiasListaTipoObj.map(tecnologia=>{
        return (
            <Tecnologia nome={tecnologia.nome}/>
        )
    })
}