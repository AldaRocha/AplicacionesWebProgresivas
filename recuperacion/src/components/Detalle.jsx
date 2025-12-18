import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const Detalle = ({ mostrarPublicacion }) => {
    const [dataPub, setDataPub] = useState(null);
    const [dataUse, setDataUse] = useState(null);

    useEffect(() => {
        if (mostrarPublicacion && mostrarPublicacion.id != 0 && mostrarPublicacion.userId != 0){
            DatosIniciales(mostrarPublicacion.id, mostrarPublicacion.userId);
        }
    }, [mostrarPublicacion]);

    const DatosIniciales = async(id, userId) => {
        const resPub = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
        setDataPub(resPub.data);
        
        const resUse = await axios.get("https://jsonplaceholder.typicode.com/users/" + userId);
        setDataUse(resUse.data);
    }

    return(
        <>
            <Card>
                <Card.Header>
                    <Card.Title className="text-center">
                        <h3>
                            Detalles
                        </h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <h4>
                        Usuario que publica:
                    </h4>
                    {
                        (
                            dataUse != null
                        ) ?
                        (
                            <>
                                <p>
                                    <strong>
                                        Nombre:
                                    </strong>
                                    &nbsp;{dataUse.name}
                                </p>
                                <p>
                                    <strong>
                                        Usuario:
                                    </strong>
                                    &nbsp;{dataUse.username}
                                </p>
                                <p>
                                    <strong>
                                        Telefono:
                                    </strong>
                                    &nbsp;{dataUse.phone}
                                </p>
                                <p>
                                    <strong>
                                        Web:
                                    </strong>
                                    &nbsp;{dataUse.website}
                                </p>
                                <p>
                                    <strong>
                                        Correo:
                                    </strong>
                                    &nbsp;{dataUse.email}
                                </p>
                            </>
                        ) :
                        (
                            <></>
                        )
                    }
                    <hr />
                    <h4>
                        Publicaci&oacute;n:
                    </h4>
                    {
                        (
                            dataPub != null
                        ) ?
                        (
                            <>
                                <p>
                                    <strong>
                                        Titulo:
                                    </strong>
                                    &nbsp;{dataPub.title}
                                </p>
                                <p>
                                    <strong>
                                        Cuerpo de la publicaci&oacute;n:
                                    </strong>
                                    &nbsp;{dataPub.body}
                                </p>
                            </>
                        ) :
                        (
                            <></>
                        )
                    }
                </Card.Body>
            </Card>
        </>
    );
}

export default Detalle;
