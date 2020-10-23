import React, { useState } from  'react'
import {
    Form,
    Row,
    Card,
    Col,
    Button,
  } from "react-bootstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
      faCashRegister,
    faProjectDiagram,
    faSave,
    faTrash,
    faUserPlus,
  } from "@fortawesome/free-solid-svg-icons";
import firebase from '../../config/firebase';
import 'firebase/auth';

export default function NovoUsuario() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [msgTipo, setMsgTipo] = useState()
    const [msg, setMsg] = useState()

    function cadastrar() {
        setMsgTipo(null)

        if(!email || !senha) {
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer se cadastrar!')
            return
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then( res => {
            
            setMsgTipo('sucesso')
        }).catch( erro => {
            alert(erro)
        })

    }
    return (
        <Row>
        <Col>
          <Card className="mt-3">
            <Card.Header as="h3">
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                  Cadastro
                </Col>
                <Col>
                  <Button onClick={cadastrar} className="float-right">
                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                    Cadastrar
                  </Button>
                  <Button variant="danger" className="float-right mr-2">
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Cancelar
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Form>
                    <Form.Group controlId="nome">
                      <Form.Label>Nome Completo</Form.Label>
                      <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite seu nome completo"/>
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Digite sua senha"/>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )

}