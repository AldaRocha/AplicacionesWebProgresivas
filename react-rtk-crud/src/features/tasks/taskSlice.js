import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 descripcion",
        completed: false
    },
    {
        id: "2",
        title: "Task ",
        description: "Task 2 descripcion",
        completed: false
    }
];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        // Agregar Tarea
        addTask: (state, action) => {
            state.push(action.payload);
        },
        // Eliminar Tarea
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload);
            if (taskFound){
                state.splice(state.indexOf(taskFound), 1);
            }
        },
        // Editar Tarea
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const findTask = state.find(task => task.id === id);
            if (findTask){
                findTask.title = title;
                findTask.description = description;
            }
        }
    }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;