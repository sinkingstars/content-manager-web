import React from "react";
import {
  Form,
  Row,
  Card,
  Col,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjetosCrud() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
          <Card.Header as="h3">
            <Row>
              <Col>
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                Projeto - Novo
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
                    <Form.Label>Nome do Projeto</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  {/* TODO: Adicionar um select-react ou select2 aqui com opção de multiplas entradas */}
                  <Form.Group controlId="colaboradores">
                    <Form.Label>Colaboradores</Form.Label>
                    <Form.Control as="select" />
                  </Form.Group>

                  <Form.Group controlId="descricao">
                    <Form.Label>Descrição do Projeto</Form.Label>
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
