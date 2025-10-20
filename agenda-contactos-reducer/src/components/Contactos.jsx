import React, { useEffect, useReducer, useState } from "react";
import TablaContactos from "./TablaContactos";
import Formulario from "./Formulario";
import { ContactosReducer } from "../reducers/ContactosReducer";

// Datos de prueba
    // const contactos = [
    //     {
    //         id: "C1",
    //         nombre: "Raúl",
    //         numero: "4778324568"
    //     },
    //     {
    //         id: "C2",
    //         nombre: "Gerardo",
    //         numero: "4772692804"
    //     },
    //     {
    //         id: "C3",
    //         nombre: "Sandra",
    //         numero: "4770132691"
    //     }
    // ];

    // Definimos la funcion init encargada de recuperar el localstorage
    const init = () => {
        const contactos = localStorage.getItem("contactos");
        return contactos ? JSON.parse(contactos) : [];
    }

const Contactos = () => {
    // Creamos el reducer pasándole el ContactosReducer y un initial state
    // const [state, dispatch] = useReducer(ContactosReducer, contactos);
    const [state, dispatch] = useReducer(ContactosReducer, [], init);

    const [formView, setFormView] = useState(false);

    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state));
    }, [state]);

    return(
        <div className="container mt-3">
            <button className="btn btn-success" onClick={ () => setFormView(!formView) }>
                { !formView ? "+ Agregar Contacto" : "- Cerrar Formulario" }
            </button>
            {
                formView && <Formulario dispatch={ dispatch }/>
            }
            <TablaContactos contactos={ state } dispatch={ dispatch }/>
        </div>
    );
}

export default Contactos;