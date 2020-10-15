import React from "react"
import {Form, FormGroup, FormLabel} from 'react-bootstrap'
export default function() {

    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="título" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" placeholder="autor" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Texto</Form.Label>
          <Form.Control as="textarea" rows="10" />
        </Form.Group>
      </Form>
    )
}