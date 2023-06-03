import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

export default props=>
<section>
    <Form action='/contato' method='get' >
        <Form.Group>
            <Form.Label htmlFor='nome'>Nome</Form.Label>
            <Form.Control id='nome' type='text' name='nome'/>
        </Form.Group>
        <Row>
            <Form.Group as={Col}>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control id='email' type='email' name='email'/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label htmlFor='tel'>Telefone</Form.Label>
                <Form.Control id='tel' type='tel' name='tel'/>
            </Form.Group>
        </Row>
        <Form.Group>
            <Form.Label htmlFor='msg'>Mensagem</Form.Label>
            <Form.Control id='msg' as='textarea' name='msg'/>
        </Form.Group>
        <Button type='submit'>Enviar</Button>
    </Form>
</section>