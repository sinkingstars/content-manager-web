import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

export default function NovoArtigo() {
  return (
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" placeholder="título" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Briefing</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Corpo do texto</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
      <Link to="#">
        <Button className="float-right">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Criar
        </Button>
      </Link>
      <Link to="#">
        <Button className="float-right">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Limpar
        </Button>
      </Link>
    </Form>
  );
}
