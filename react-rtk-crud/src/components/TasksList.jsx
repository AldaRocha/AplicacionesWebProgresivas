import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TasksList = () => {
    // Accedemos al estado para recuperar la lista de tareas
    const tasks = useSelector(state => state.tasks);

    // Agregamos el acceso al dispatch
    const dispatch = useDispatch();

    // Funcion para manejar el evento de Delete
    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }

    return(
        <div>
            <header>
                <h1>
                    Tasks { tasks.length }
                </h1>
                <Link to="/create-task">
                    Create
                </Link>
            </header>
            {
                tasks.map(tasks => (
                    <div key={ tasks.id }>
                        <h3>
                            { tasks.title }
                        </h3>
                        <p>
                            { tasks.description }
                        </p>
                        <button onClick={ () => handleDelete(tasks.id) }>
                            Delete
                        </button>
                        <Link to={ `/edit-task/${tasks.id}` }>
                            Editar
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default TasksList;
