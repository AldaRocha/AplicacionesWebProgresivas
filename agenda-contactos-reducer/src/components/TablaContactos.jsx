import React from "react";

const TablaContactos = ({ contactos = [], dispatch }) => {
    // Definimos el metodo handleDelete
    const HandleDelete = (id) => {
        // Definimos el objeto action para Delete
        const deleteAction = {
            type: "delete",
            payload: id
        }

        dispatch(deleteAction);
    }

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
                        Acciónes
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    contactos.map((con) => {
                        const finalId = con.id.split("-");

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