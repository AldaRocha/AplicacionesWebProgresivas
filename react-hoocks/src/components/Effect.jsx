import React, { useEffect, useState } from "react";

const Effect = () => {
    // Agregamos un useState para almacenar los datos
    const [users, setUsers] = useState([]);

    // Funciión para realizar una peticion a la API de JsonPlaceHolder
    const getUsuarios = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        setUsers(data);
    }

    // Usando un useEffect para invocar al getUsuarios
    useEffect(() => {
        getUsuarios();
    }, []);
    console.log(users);

    return(
        <div>
            <h1>
                Effect
            </h1>
            <h2>
                Lista de usuarios
            </h2>
            {
                users.map((user) => {
                    return <div key={user.id} className="card">
                        <div className="card-body">
                            { user.name }
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Effect;