import React from "react";
import { useState } from "react";
import Titulo from "./components/Titulo";
import Menu from "./components/Menu";
import Recibo from "./components/Recibo";

const App = () => {
  const [pedido, setPedido] = useState({
    pizza: "",
    nombre: "",
    direccion: "",
    numeroPizzas: 0,
    telefono: "",
    pago: ""
  });

  const MostrarPedido = (e) => {
    setPedido(e);
  }

  return (
    <div className="negro">
      <Titulo/>
      <div className="container-fluid mt-4">
        <div className="row">
          <Menu pedido={ MostrarPedido }/>
          <Recibo mostrarPedido={ pedido }/>
        </div>
      </div>
    </div>
  )
}

export default App
