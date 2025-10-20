import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ dispatch }) => {
    // Agregamos un state para almacenar los datos
    const [data, setData] = useState({
        nombre: "",
        numero: ""
    });

    // Desestructurando el state
    const {nombre, numero} = data;

    // Agregamos el método handleChange para los campos del formulario
    const HandleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    // Definimos la acioón para Add
    const actionAdd = {
        type: "add",
        payload: {
            id: uuid(),
            nombre,
            numero
        }
    }

    const HandleAdd = () => {
        dispatch(actionAdd);
    }

    return(
        <>
            <div className="container">
                <label className="mx-1 d-grid gap-2">
                    Nombre: {" "}
                    <input type="text" name="nombre" value={ nombre } className="form-control" autoComplete="off" onChange={ HandleChange }/>
                </label>
                <label className="mx-1 d-grid gap-2">
                    Número: {" "}
                    <input type="text" name="numero" value={ numero } className="form-control" autoComplete="off" onChange={ HandleChange }/>
                </label>
                <label className="mx-1 d-grid gap-2">
                    <button className="btn btn-info mt-2" onClick={ HandleAdd }>
                        Agregar
                    </button>
                </label>
            </div>
        </>
    );
}

export default Formulario;