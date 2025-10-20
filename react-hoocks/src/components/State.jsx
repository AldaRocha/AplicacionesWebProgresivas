import React, { useEffect, useState } from "react";

const State = () => {
    // Agregamos un estado para el componente
    const [state, setState] = useState(0);

    // setInterval(() => {
    //     console.log(state);
    //     setState(state + 1);
    // }, 2000);

    // Agregamos un useEffect para controlar el cliclo de vida del componente
    // [] Lista de dependencias
    useEffect(() => {
        console.log(state);
    }, [state]);

    const handleClick = () => {
        setState(state + 1);
    }

    return(
        <div>
            <h1>
                useState
            </h1>
            <hr/>
            Cuenta: { state }
            <br/>
            <button onClick={ handleClick }>
                Aumentar
            </button>
        </div>
    );
}

export default State;
