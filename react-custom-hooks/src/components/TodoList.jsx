import React, { useState } from "react";
import useArray from "../hook/useArray";

const TodoList = () => {
    const [todos, todoActions] = useArray([]);
    const [tarea, setTarea] = useState("");

    const nextId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;

    const HandleAddTodo = () => {
        if (tarea.trim() !== ""){
            const newTodo = {
                id: nextId,
                title: tarea
            };
            todoActions.add(newTodo);
            setTarea("");
        }
    }

    return(
        <div className="card text-center py-4 px-4">
            <h2>
                Lista de tareas
            </h2>
            <div>
                <input className="form-control" type="text" value={ tarea } onChange={(e) => setTarea(e.target.value)} placeholder="Nueva tarea..." />
                <br />
                <button className="btn btn-success" onClick={HandleAddTodo}>
                    Agregar Tarea
                </button>
                &nbsp;
                <button className="btn btn-secondary" onClick={todoActions.clear} disabled={todos.length === 0}>
                    Borrar Todo
                </button>
            </div>
            <hr/>
            {
                todos.length === 0 ? (
                    <p>
                        No hay tareas. ¡Añade una!
                    </p>
                ) : (
                    <ul>
                        {
                            todos.map(todo => (
                                <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                        **ID: {todo.id}** - {todo.title}
                                    </span>
                                    <button className="btn btn-danger" onClick={() => todoActions.removeById(todo.id)} style={{ marginLeft: '10px' }}>
                                        Eliminar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default TodoList;