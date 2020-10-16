import React from "react";
import { Col, Row, Card, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BlogPosts() {
  return (
    <Row>
      <Col>
        <Card className="mt-3">
          <Card.Header as="h3">
            <Row>
              <Col>
                <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                Artigos
              </Col>
              <Col>
                <Link to="artigos-crud">
                  <Button className="float-right">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Novo Artigo
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Criado em</th>
                  <th>Publicado em </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to="/artigos-crud">Como escrever redação</Link></td>
                  <td>Júlio Sousa</td>
                  <td>18/08/2020</td>
                  <td>19/08/2020</td>
                  <td>Ideia</td>
                </tr>
                <tr>
                  <td><Link to="/artigos-crud">Como aprender melhor</Link></td>
                  <td>Túlio Alcântara</td>
                  <td>18/08/2020</td>
                  <td>19/08/2020</td>
                  <td>Ideia</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
