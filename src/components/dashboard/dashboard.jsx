import React from "react";
import { Col, Row, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCalendar,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

//CSS
import "react-datepicker/dist/react-datepicker.css";

function Dashboard() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
          <Card.Header as="h3">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            Dashboard
          </Card.Header>
          <Form>
            <Card.Body>
              {/* FILTROS */}
              <Row>
                <Col>
                  <Form.Group controlId="projeto">
                    <Form.Label>1. Escolha o projeto</Form.Label>
                    <Form.Control as="select" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Form.Group controlId="dataInicio">
                    <Form.Label>2. Escolha o período inicial</Form.Label>
                    <br></br>
                    <FontAwesomeIcon icon={faCalendar} />
                    <DatePicker className="ml-2" />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group controlId="datafim">
                    <Form.Label>3. Escolha o período Final</Form.Label>
                    <br></br>
                    <FontAwesomeIcon icon={faCalendar} />
                    <DatePicker className="ml-2" />
                  </Form.Group>
                </Col>
              </Row>

              {/* CARDS TEXTOS */}
              <Row className="mt-3">
                <Col sm="3">
                  <Card>
                    <Card.Body>
                      <h3>10</h3>
                      <h5>textos em produção</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card>
                    <Card.Body>
                      <h3>10</h3>
                      <h5>textos sendo produzidos</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card>
                    <Card.Body>
                      <h3>10</h3>
                      <h5>textos a publicar</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card>
                    <Card.Body>
                      <h3>10</h3>
                      <h5>textos publicados</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Form>
        </Card>

        {/* ÚLTIMOS ARTIGOS */}
        <Card className="mt-3">
          <Card.Header as="h3">
            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
            Últimos artigos
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <ul>
                  <li>
                    <a href="#">Artigo 1</a>
                  </li>
                  <li>
                    <a href="#">Artigo 2</a>
                  </li>
                  <li>
                    <a href="#">Artigo 3</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Dashboard;
