import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom";

const TasksForm = () => {
    // Estado para guardar los datos del formulario
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    // Agregamos el acceso al dispatch de Redux
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Agregamos el hook useParams para acceder a los parametros de url
    const params = useParams();

    // Accedemos al estado
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        if (params.id){
            setTask(tasks.find((task) => task.id === params.id));
        }
    })

    // Funcion para el eventoOnChange del formulario
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    // Funcion para el evento onSubmit
    const handleSubmit = e => {
        e.preventDefault();

        if (params.id){
            dispatch(editTask(task))
        } else{
            dispatch(addTask({
                ...task,
                id: uuid()
            }))
        }

        navigate("/");
    }

    return(
        <>
            <form onSubmit={ handleSubmit }>
                <input type="text" name="title" placeholder="Title" onChange={ handleChange } value={ task.title }/>
                <textarea name="description" placeholder="Descripción" onChange={ handleChange } value={ task.description }></textarea>
                <button>save</button>
            </form>
        </>
    );
}

export default TasksForm;