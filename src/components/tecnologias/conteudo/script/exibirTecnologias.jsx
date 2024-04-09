import React from 'react'

import Tecnologia from '../components/Tecnologia'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default tecnologiasListaTipoObj=>{
    return tecnologiasListaTipoObj.map(tecnologia=>{
        return (
            <Tecnologia 
                nome={tecnologia.nome}
                icone={tecnologia.icone}
            />
        )
    })
}