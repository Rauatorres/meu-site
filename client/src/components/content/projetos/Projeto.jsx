import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default props=>{
    var imgPath = `http://localhost:3001/projetos_img/${props.img}`
    return (
        <Card className='Projeto'>
            <Card.Img className='ProjetoImg' variant='top' src={imgPath} alt={props.img} />
            <Card.Body>
                <Card.Title className='ProjetoTitulo Fonte2'>{props.titulo}</Card.Title>
                <Card.Text className='ProjetoDesc' >{props.children}</Card.Text>
                <Button className='ProjetoBotao' variant='danger' href={props.link} target='__blank'>Visitar</Button>
            </Card.Body>
        </Card>
    )
}