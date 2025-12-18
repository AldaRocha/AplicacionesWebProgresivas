import React, { useState } from "react"
import Header from "./components/Header"
import { Col, Container, Row } from "react-bootstrap"
import ListaDatos from "./components/ListaDatos"
import Footer from "./components/Footer"
import Detalle from "./components/Detalle"

function App() {
  const [datos, setDatos] = useState({
    id: 0,
    userId: 0
  });

  const MostrarPublicacion = (e) => {
    setDatos(e)
  }

  return (
    <>
      <div className="py-4">
        <Header/>
        <Container className="mt-3">
          <Row>
            <Col>
              <ListaDatos publicacion={ MostrarPublicacion }/>
            </Col>
            <Col>
              <Detalle mostrarPublicacion={ datos }/>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    </>
  )
}

export default App
