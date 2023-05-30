import React from 'react'
import {Card} from 'react-bootstrap'

export default props=>
<Card bg='dark' border='light'>
  <Card.Header as='h2'>{props.titulo}</Card.Header>
  {props.children}
</Card>