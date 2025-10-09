import React from 'react';
import { useState } from 'react';
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import Resultados from "./components/Resultados";

const App = () => {
  const [conteoVotos, setConteoVotos] = useState({
    Java: 0,
    Python: 0,
    Kotlin: 0
  });

  const ManejarVoto = (voto) =>{
    setConteoVotos(prevConteo => ({
      ...prevConteo,
      [voto.seleccion]: prevConteo[voto.seleccion] + 1
    }));
  }

  return (
    <div className='negro'>
      <Titulo/>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <Formulario votar={ ManejarVoto }/>
          <Resultados conteo={ conteoVotos }/>
        </div>
      </div>
    </div>
  )
}

export default App
