import React from 'react'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

export default function NovoArtigo(){
    
    return (
        <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Nome do Projeto</Form.Label>
    <Form.Control type="text" placeholder="Nome do projeto" />
  </Form.Group>
  {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
      <Form.Check
        custom
        inline
        label="1"
        type={type}
        id={`custom-inline-${type}-1`}
      />
      <Form.Check
        custom
        inline
        label="2"
        type={type}
        id={`custom-inline-${type}-2`}
      />
       <Form.Check
        custom
        inline
        label="3"
        type={type}
        id={`custom-inline-${type}-2`}
      />
       <Form.Check
        custom
        inline
        label="4"
        type={type}
        id={`custom-inline-${type}-2`}
      />
       <Form.Check
        custom
        inline
        label="5"
        type={type}
        id={`custom-inline-${type}-2`}
      />
    </div>
  ))}

<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
    )
}