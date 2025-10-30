import { GET_PROFILE, GET_USERS } from "../types";

export default (state, action) => {
    // Desestructuramos el action
    const {payload, type} = action;

    switch(type){
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        default:
            return state
    }
}