import React from "react";
import { Col, Row, Card, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons"

function PersonasTable() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
          <Row>
            <Col>
              <Card.Header as="h3">
                <FontAwesomeIcon icon={faUsers} className="mr-2"/>
                Personas</Card.Header>
            </Col>
            <Col>
              <Button className="float-right mt-2 mr-2">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2"/>
                Nova persona
                </Button>
            </Col>
          </Row>
        </Card>

        <Card className="mt-3">
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
