import React from "react";
import Titulo from "./components/Titulo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="negro">
      <Titulo/>
      <div className="container-fluid">
        <TodoList />
      </div>
    </div>
  )
}

export default App
