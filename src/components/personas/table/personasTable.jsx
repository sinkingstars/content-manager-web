import React from "react";
import { Col, Row, Card, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

function PersonasTable() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
        <Card.Header as="h3">
          <Row>
            <Col>
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Personas
            </Col>
            <Col>
              <Button className="float-right">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Nova persona
              </Button>
            </Col>
          </Row>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nome da Persona</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Túlio</td>
                  <td>Vestibulando de Ciências da Computação</td>
                </tr>
                <tr>
                  <td>Júlio</td>
                  <td>Vestibulando de Ciências da Computação</td>
                </tr>
                <tr>
                  <td>Pablo</td>
                  <td>Vestibulando de Ciências da Computação</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PersonasTable;
