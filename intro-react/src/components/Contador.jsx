import React from "react";
import { useState } from 'react';

const Contador = ({inicial, factor}) => {
    // Definiendo un nuevo estado para el contador
    const [contador, setContador] = useState(inicial);
    
    // Función para disminuir el contador
    const Disminuir = () => {
        setContador(contador - factor);
        console.log(contador);
    }
    
    const Aumentar = () => {
        setContador(contador + factor);
        console.log(contador);
    }

    return(
        <span>
            <button onClick={ Disminuir }>
                -
            </button>
            <h1>
                { contador }
            </h1>
            <button onClick={ Aumentar }>
                +
            </button>
        </span>
    );
}

export default Contador;