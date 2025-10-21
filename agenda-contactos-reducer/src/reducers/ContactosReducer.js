// Definimos el Reducer de Contactos como una arrow function que recibe solo dos parámetros que son: un state y un action

export const ContactosReducer = (state, action) => {
    // Toda acción tiene un tipo para lo cual agregamos un switch-case para determinar que tipo es
    switch(action.type) {
        case "add":
            return [...state, action.payload]
        case "delete":
            return state.filter((actual) => actual.id !== action.payload);
        case "edit":
            return state.map(contacto => (contacto.id === action.payload.id) ? action.payload : contacto
            );
        default:
            return state;
    }
}