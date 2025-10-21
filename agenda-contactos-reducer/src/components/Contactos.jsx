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
    const [contactoEditar, setContactoEditar] = useState(null);

    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state));
    }, [state]);

    const MostrarVista = () => {
        if (formView){
            setContactoEditar(null);
        }
        setFormView(!formView)
    }

    const HandlePrepararEdicion = (id) => {
        const contacto = state.find(c => c.id === id);
        setContactoEditar(contacto);
        setFormView(true);
    }

    return(
        <div className="container mt-3">
            <button className="btn btn-success" onClick={ MostrarVista }>
                { !formView ? "+ Agregar Contacto" : "- Cerrar Formulario" }
            </button>
            {
                formView && <Formulario dispatch={ dispatch } MostrarVista={ MostrarVista } contactoEditar={ contactoEditar } setContactoEditar={ setContactoEditar }/>
            }
            <TablaContactos contactos={ state } dispatch={ dispatch } HandlePrepararEdicion={ HandlePrepararEdicion }/>
        </div>
    );
}

export default Contactos;