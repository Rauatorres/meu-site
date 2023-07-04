import React from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default props=>{
    var imgUrl = `http://localhost:3001/tecnologias_img/${props.img}`
    return (
        <div className='Tecnologia'>
            <OverlayTrigger placement='bottom' overlay={<Tooltip>link original</Tooltip>}>
                <Link to={props.link_original} target='_blank'><img src={imgUrl} alt={props.img} className='TecnologiaImg'/></Link>
            </OverlayTrigger>
           <h4 className='TecnologiaNome'>{props.nome}</h4>
        </div>
    )

}