import React from "react";
import { Col, Row, Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";

function PersonasCrud() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
          <Card.Header as="h3">
            <Row>
              <Col>
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Persona - Novo
              </Col>
              <Col>
                <Button className="float-right">
                  <FontAwesomeIcon icon={faSave} className="mr-2" />
                  Salvar
                </Button>
                <Button variant="danger" className="float-right mr-2">
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Remover
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="nome">
                    <Form.Label>Nome da Persona</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="descricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="caracteristicas">
                    <Form.Label>Características</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group controlId="principaisDores">
                    <Form.Label>Principais Dores</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PersonasCrud;
