import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";
import UserContext from "./UserContext";
import { GET_PROFILE, GET_USERS } from "../types";

// Este archivo representa la definición del estado, aqui estara el estado que se va a compartir
const UserState = (props) => {
    // Definimos el estado actual
    const initialState = {
        users: [],
        selectedUser: null
    }

    // Definimos un useReducer para manejar el estado de la aplicación
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        const res = await axios.get("https://reqres.in/api/users", {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });
        console.log(res.data.data);
        dispatch({
            type: GET_USERS,
            payload: res.data.data
        })
    }

    const getProfile = async (id) => {
        const res = await axios.get("https://reqres.in/api/users/" + id, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });
        console.log(res.data.data);
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data
        })
    }

    return(
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            { props.children }
        </UserContext.Provider>
    );
}

export default UserState;