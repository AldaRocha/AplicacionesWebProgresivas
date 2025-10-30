import React, { useState } from "react";
import UserList from "./components/UserList";
import Profile from "./components/Profile";
import UserState from "./context/User/UserState";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import ModalInfo from "./components/Modal";
import axios from "axios";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [job, setJob] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    titulo: "",
    eliminar: false,
    nombre: "",
    job: "",
    fecha: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HandleAdd = async () => {
    if (nombre.trim() == ""){
      return alert("Nombre esta vacío");
    }
    if (job.trim() == ""){
      return alert("Trabajo esta vacío");
    }
    const res = await axios.post("https://reqres.in/api/users", {
      "name": nombre,
      "job": job
    },{
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    });
    setData({
      titulo: "Usuario Agregado",
      eliminar: false,
      nombre: res.data.name,
      job: res.data.job,
      fecha: res.data.createdAt.split("T")[0]
    });
    handleShow();
  }

  const HandleModify = async () => {
    if (nombre.trim() == ""){
      return alert("Nombre esta vacío");
    }
    if (job.trim() == ""){
      return alert("Trabajo esta vacío");
    }
    const res = await axios.patch("https://reqres.in/api/users/700", {
      "name": nombre,
      "job": job
    },{
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    });
    setData({
      titulo: "Usuario Modificado",
      eliminar: false,
      nombre: res.data.name,
      job: res.data.job,
      fecha: res.data.updatedAt.split("T")[0]
    });
    handleShow();
  }

  return(
    <>
      <UserState>
        <div className="container p-4">
          <header>
            <h1 className="text-center">
              React Context
            </h1>
          </header>
          <Row>
            <Col md>
              <Form.Group controlId="forName">
                <Form.Label>
                  Name:
                </Form.Label>
                <Form.Control type="text" placeholder="Nombre:" value={ nombre } onChange={ (e) => setNombre(e.target.value) } />
                <Form.Text className="text-muted">
                  Debes registrar el nombre para el registro
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <FormGroup controlId="forJob">
                <Form.Label>
                  Trabajo:
                </Form.Label>
                <Form.Control type="text" placeholder="Trabajo:" value={ job } onChange={ (e) => setJob(e.target.value) } />
                <Form.Text className="text-muted">
                  Debes registrar el trabajo para el registro
                </Form.Text>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md className="d-flex justify-content-center">
              <Button className="mb-4" variant="success" onClick={ HandleAdd }>
                Agregar
              </Button>
            </Col>
            <Col md className="d-flex justify-content-center">
              <Button className="mb-4" variant="secondary" onClick={ HandleModify }>
                Editar
              </Button>
            </Col>
          </Row>
          <div className="row">
            <div className="col-md-7">
              <UserList />
            </div>
            <div className="col-md-5">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
      <ModalInfo show={ show } handleClose={ handleClose } info={ data } />
    </>
  );
}

export default App;