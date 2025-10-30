import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/User/UserContext";
import { Button } from "react-bootstrap";
import ModalInfo from "./Modal";
import axios from "axios";

const UserList = () => {
    // Utilizamos el hook useContext para acceder al context y recuperar el state
    const { users, getUsers, getProfile } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        titulo: "",
        eliminar: false,
        nombre: "",
        job: "",
        fecha: ""
    });
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getUsers();
    }, []);

    const HandleEliminar = async (id) => {
        const res = await axios.delete("https://reqres.in/api/users/" + id, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });
        if (res.status == 204){
            setData({
                titulo: "Usuario Eliminado",
                eliminar: true,
                nombre: "",
                job: "",
                fecha: ""
            })
            handleShow();
        } else{
            alert("No se pudo borrar el usuario");
        }
    }

    return(
        <>
            <div className="list-group h-100">
                {
                    users.map(user => (
                        <a className="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center" href="#" key={ user.id } onClick={ () => getProfile(user.id) }>
                            <img src={ user.avatar } className="img-fluid mr-4 rounded-circle" width="70" alt="" />
                            <p>
                                {
                                    `${ user.first_name } ${ user.last_name }`
                                }
                            </p>
                            <Button variant="danger" onClick={ () => HandleEliminar(user.id) }>
                                Eliminar
                            </Button>
                        </a>
                    ))
                }
            </div>
            <ModalInfo show={ show } handleClose={ handleClose } info={ data } />
        </>
    );
}

export default UserList;