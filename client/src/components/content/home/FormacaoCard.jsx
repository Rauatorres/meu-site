import React from 'react'
import { Card } from 'react-bootstrap'



export default props=>
<Card>
    <div>{props.icone}</div>
    <h4>{props.titulo}</h4>
    <div>
        {props.children}
    </div>
</Card>