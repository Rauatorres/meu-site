import React from 'react'

export default props=>{
    var imgUrl = `http://localhost:3001/tecnologias_img/${props.img}`
    return (
        <div>
           <img src={imgUrl} alt={props.img} className='TecnologiaImg'/>
           <h4>{props.nome}</h4>
        </div>
    )

}