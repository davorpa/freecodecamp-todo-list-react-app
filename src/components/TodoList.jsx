import React from "react";
import "./TodoList.css";
import Task from "./Task";

function TodoList() {
    return (
        <React.Fragment>
            <header className="todo-header">
                <h1 className="todo-title">Mis Tareas</h1>
            </header>
            <Task text="Tarea 1" />
        </React.Fragment>
    );
}

export default TodoList;
