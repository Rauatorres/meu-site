import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default props=>{
    var imgPath = `http://localhost:3001/projetos_img/${props.img}`
    return (
        <Card>
            <img src={imgPath} alt={props.img} />
            <h4>{props.titulo}</h4>
            <p>{props.children}</p>
            <Button>Visitar</Button>
        </Card>
    )
}