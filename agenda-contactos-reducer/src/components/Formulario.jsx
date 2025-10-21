import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ dispatch, MostrarVista, contactoEditar, setContactoEditar }) => {
    const initialData = contactoEditar || {
        nombre: "",
        numero: "",
        sexo: "",
        cumpleanos: "",
        imagen: ""
    };

    // Agregamos un state para almacenar los datos
    const [data, setData] = useState(initialData);

    // Desestructurando el state
    const {id = "", nombre, numero, sexo, cumpleanos, imagen} = data;

    useEffect(() => {
        if (contactoEditar) {
            setData(contactoEditar);
        } else {
            setData({
                nombre: "",
                numero: "",
                sexo: "",
                cumpleanos: "",
                imagen: ""
            });
        }
    }, [contactoEditar]);

    // Agregamos el método handleChange para los campos del formulario
    const HandleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const HandleSubmit = (e) => {
        e.preventDefault();

        // Validaciones (se simplifican un poco, solo para el ejemplo)
        if (nombre.trim() === "") {
            return alert("Nombre es obligatorio");
        }
        if (numero.trim() === "") {
            return alert("Numero es obligatorio");
        }
        if (sexo.trim() === "") {
            return alert("Sexo es obligatorio");
        }
        if (cumpleanos.trim() === "") {
            return alert("Fecha de nacimiento es obligatoria");
        }
        if (imagen.trim() === "") {
            return alert("Url de imagen es obligatoria");
        }
        
        let action;
        let payload = { nombre, numero, sexo, cumpleanos, imagen };

        if (contactoEditar) {
            action = {
                type: "edit",
                payload: {
                    ...payload,
                    id: contactoEditar.id
                }
            }
            setContactoEditar(null);
        } else {
            action = {
                type: "add",
                payload: {
                    ...payload,
                    id: uuid()
                }
            }
        }

        dispatch(action);
        MostrarVista();
    }

    return(
        <>
            <div className="container my-3">
                <div className="card py-4 px-3">
                    <label className="mx-1 d-grid gap-2">
                        Nombre: {" "}
                        <input type="text" name="nombre" value={ nombre } className="form-control" autoComplete="off" onChange={ HandleChange }/>
                    </label>
                    <label className="mx-1 d-grid gap-2">
                        Número: {" "}
                        <input type="text" name="numero" value={ numero } className="form-control" autoComplete="off" onChange={ HandleChange }/>
                    </label>
                    <label className="mx-1 d-grid gap-2">
                        Sexo:
                    </label>
                    <div className="d-flex align-items-center justify-content-center">
                        Masculino: &nbsp; <input type="radio" name="sexo" value="M" checked={ sexo === "M" } onClick={ HandleChange }/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        Femenino: &nbsp; <input type="radio" name="sexo" value="F" checked={ sexo === "F" } onClick={ HandleChange }/>
                    </div>
                    <label className="mx-1 d-grid gap-2">
                        Fecha de Nacimiento: {" "}
                        <input type="date" name="cumpleanos" value={ cumpleanos } className="form-control" autoComplete="off" onChange={ HandleChange }/>
                    </label>
                    <label className="mx-1 d-grid gap-2">
                        Url de la Imagen: {" "}
                        <input type="text" name="imagen" value={ imagen } className="form-control" autoComplete="off" onChange={ HandleChange }/>
                    </label>
                    <label className="mx-1 d-grid gap-2">
                        <button className="btn btn-info mt-2" onClick={ HandleSubmit }>
                            { contactoEditar ? "Guardar Cambios" : "Agregar" }
                        </button>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Formulario;