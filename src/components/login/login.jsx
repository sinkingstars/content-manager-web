import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from '../../config/firebase';
import 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  function logar() {
    firebase.auth().signInWithEmailAndPassword(email, senha).then( res => {

      alert("USUÁRIO LOGADO!")
    }).catch( erro => {
      alert(erro)
    })
  }

  return (

    <div>
    <Row>
      <Col>
      <Card className="mt-3">
        <Card.Body>
        <Form >
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Informe seu email" />
          </Form.Group>
          <Form.Group controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control onChange={(e) => setSenha(e.target.value)}type="password" placeholder="Informe sua senha" />
          </Form.Group>
          <div className="text-center mt-5">
            <Button onClick={logar} variant="primary" className="mr-5 w-100">
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
    </div>
  );
}
