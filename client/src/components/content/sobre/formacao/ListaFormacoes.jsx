import React from 'react-dom'
import {Card} from 'react-bootstrap'

export default props=>
<div className='FormacaoLista'>
  <Card className='FormacaoCard' text='dark'>
    <Card.Body>
      <Card.Title>Faculdade</Card.Title>
      <Card.Text>
        <p>
        Curso: Análise e desenvolvimento de sistemas.
        Instituição: Universidade Estácio de Sá.
        Status: Em andamento.
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='FormacaoCard' text='dark'>
    <Card.Body>
      <Card.Title>Experiência</Card.Title>
      <Card.Text>
        <p>
        Experiência em desenvolvimento de site para sistema de gerenciamento hospitalar em php e javascript.
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='FormacaoCard' text='dark'>
    <Card.Body>
      <Card.Title>Cursos</Card.Title>
      <Card.Text>
        <p>
        Curso completodo desenvolvedor NodeJS e MongoDB - Udemy
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='FormacaoCard' text='dark'>
    <Card.Body>
      <Card.Title>Idiomas</Card.Title>
      <Card.Text>
      Idioma: Inglês. Nível: Fluente.
      </Card.Text>
    </Card.Body>
  </Card>
</div>