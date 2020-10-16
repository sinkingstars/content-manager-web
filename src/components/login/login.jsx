import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Row>
      <Col>
      <Card className="mt-3">
        <Card.Body>
        <Form >
          <Form.Group controlId="usuario">
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="text" placeholder="Informe seu login" />
          </Form.Group>
          <Form.Group controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Informe sua senha" />
          </Form.Group>
          <div className="text-center mt-5">
            <Button variant="primary" className="mr-5 w-100">
              Entrar
            </Button>
            <Link to="/" className="mt-3 float-left">
              Cadastra-se
            </Link>
            <Link to="/" className="mt-3 float-right">Esqueci minha senha</Link>
          </div>
        </Form>
        </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
