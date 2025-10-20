import React, { useEffect, useState } from "react";

const StateHook = () => {
    // Declaramos una variable de estado, mediante el hook useState
    const [count, setCount] = useState(0);

    // Utilizamos el hook useEffect para modificar el título de la página
    useEffect(() => {
        document.title = `Yo clicked ${count} times`;
    });

    return(
        <div>
            <p>
                You clicked { count } times
            </p>
            <button onClick={ () => setCount(count+1) }>
                Click me
            </button>
        </div>
    );
}

export default StateHook;