import React from "react";

const TablaContactos = ({ contactos = [], dispatch, HandlePrepararEdicion }) => {
    // Definimos el metodo handleDelete
    const HandleDelete = (id) => {
        // Definimos el objeto action para Delete
        const deleteAction = {
            type: "delete",
            payload: id
        }

        dispatch(deleteAction);
    }

    const HandleEdit = (id) => {
        HandlePrepararEdicion(id);
    }

    const calcularEdad = (dateString) => {
        const hoy = new Date();
        const nacimiento = new Date(dateString);

        let edad = hoy.getFullYear() - nacimiento.getFullYear();

        const mes = hoy.getMonth() - nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        return edad;
    };

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Número
                    </th>
                    <th>
                        Sexo
                    </th>
                    <th>
                        Edad
                    </th>
                    <th>
                        Imagen
                    </th>
                    <th>
                        Acciónes
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    contactos.map((con) => {
                        const finalId = con.id.split("-");
                        const edad = calcularEdad(con.cumpleanos);

                        return(
                            <tr key={ con.id }>
                                <th>
                                    { finalId[0] }
                                </th>
                                <th>
                                    { con.nombre }
                                </th>
                                <th>
                                    { con.numero }
                                </th>
                                <th>
                                    { con.sexo === "M" ? "Masculino" : con.sexo === "F" ? "Femenino" : "Otro" }
                                </th>
                                <th>
                                    { edad } años
                                </th>
                                <th>
                                    <img src={ con.imagen } alt="Imagen " style={{ width: "100px", height: "150px" }} />
                                </th>
                                <th>
                                    <button className="btn btn-secondary" onClick={ () => HandleEdit(con.id) }>
                                        Modificar
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={ () => HandleDelete(con.id) }>
                                        Eliminar
                                    </button>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default TablaContactos;