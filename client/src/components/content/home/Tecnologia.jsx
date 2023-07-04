import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default props=>{
    var imgUrl = `http://localhost:3001/tecnologias_img/${props.img}`
    return (
        <div className='Tecnologia'>
            <OverlayTrigger placement='right' overlay={<Tooltip>Link</Tooltip>}>
                <img src={imgUrl} alt={props.img} className='TecnologiaImg'/>
            </OverlayTrigger>
           <h4 className='TecnologiaNome'>{props.nome}</h4>
        </div>
    )

}