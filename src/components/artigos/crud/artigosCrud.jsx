import React from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faSave,
  faNewspaper,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

//CSS
import "react-datepicker/dist/react-datepicker.css";

export default function ArtigosCrud() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
          <Card.Header as="h3">
            <Row>
              <Col sm="8">
                <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                Artigo - Novo
              </Col>
              <Col sm="4">
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
                  <Form.Group controlId="dataPublicacao">
                    <Form.Label>Publicar em:</Form.Label>
                    <br></br>
                    <FontAwesomeIcon icon={faCalendar} />
                    <DatePicker className="ml-2" />
                  </Form.Group>

                  <Form.Group controlId="titulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                      <option>Ideia</option>
                      <option>A criar</option>
                      <option>Em criação</option>
                      <option>A revisar</option>
                      <option>A publicar</option>
                      <option>Publicado</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="briefing">
                    <Form.Label>Briefing</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group controlId="corpoTexto">
                    <Form.Label>Corpo do texto</Form.Label>
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
