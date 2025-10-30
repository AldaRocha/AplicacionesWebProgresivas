import React, { useState } from "react";
import "./App.css";
import { Alert, Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalExample from "./components/ModalExample";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header>
        <h1>
          React - Bootstrap
        </h1>
      </header>
      <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="forEmail">
                <Form.Label>
                  Email Address:
                </Form.Label>
                <Form.Control type="email" placeholder="ejemplo@gmail.com" />
                <Form.Text className="text-muted">
                  Debes utilizar una dirección de email válida
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="forPassword">
                <Form.Label>
                  Password:
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        <Card>
          <Card.Img src="https://react-bootstrap.netlify.app/img/logo.svg" />
          <Card.Body>
            <Card.Title>
              Título del Card
            </Card.Title>
            <Card.Text>
              Este es un ejemplo de Card en React - Bootstrap
            </Card.Text>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Prueba 1</Breadcrumb.Item>
          <Breadcrumb.Item>Prueba 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Prueba 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">
          Botón de Alerta
        </Alert>
        <Button>
          Botón de Prueba
        </Button>
        <Button variant="primary" onClick={ handleShow }>
          Launch demo modal
        </Button>
      </Container>
      <ModalExample show={ show } handleClose={ handleClose } />
    </>
  )
}

export default App
