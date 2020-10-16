import React from "react";
import { Col, Row, Card, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProjetosTable() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
          <Card.Header as="h3">
            <Row>
              <Col>
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                Projetos
              </Col>
              <Col>
                <Link to="/projetos-crud">
                  <Button className="float-right">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Novo projeto
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nome do Projeto</th>
                  <th>Artigos</th>
                  <th>Colaboradores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                      <Link to="/artigos-table">Blog Posts</Link>
                  </td>
                  <td>40</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>30</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>41</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>34</td>
                  <td>2</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
