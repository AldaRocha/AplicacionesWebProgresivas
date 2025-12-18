import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export const ListaDatos = ({ publicacion }) => {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        DatosIniciales();
    }, []);

    const DatosIniciales = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPublicaciones(response.data);
    }

    const HandlePublicacionSelected = (id, userId) => {
        publicacion({
            "id": id,
            "userId": userId
        })
    }

    return(
        <>
            <Card>
                <Card.Header>
                    <Card.Title className="text-center">
                        <h3>
                            Listado de Datos
                        </h3>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <ul>
                        {
                            publicaciones && publicaciones.map((p) => {
                                return(
                                    <li key={ p.id } className="mt-2">
                                        <Button onClick={ () => HandlePublicacionSelected(p.id, p.userId) }>
                                            {
                                                p.title
                                            }
                                        </Button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Card.Body>
            </Card>
        </>
    );
}

export default ListaDatos;
