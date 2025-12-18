import React from "react";
import { useSelector } from "react-redux";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const tasksState = useSelector(state => state.tasks);
  console.log(tasksState)
  return(
    <div>
      <h1>
        React Redux Toolkit
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <TasksList/> }/>
          <Route path="/create-task" element={ <TasksForm/> }/>
          <Route path="/edit-task/:id" element={ <TasksForm/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
