import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <Form style={{textAlign:"center", marginTop:"150px"}}>
      <Form.Group controlId="formBasicLogin" >
        <Form.Label>Login</Form.Label>
        <Form.Control type="text" placeholder="Enter Login" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="login-options mt-5 text-left">
      <Button variant="primary" className="mr-5">Entrar</Button>
          <a href="#" className="mr-5">Cadastra-se</a>
          <a href="#">Esqueci minha senha</a>
      </div>
      
    </Form>
  );
}
