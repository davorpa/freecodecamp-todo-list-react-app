import React from "react";
import "./TodoList.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TodoList() {
    return (
        <React.Fragment>
            <header className="todo-header">
                <h1 className="todo-title">Mis Tareas</h1>
            </header>
            <footer className="todo-footer">
                <TaskForm />
            </footer>
            <Task text="Tarea 1" />
            <Task text="Tarea 1" />
        </React.Fragment>
    );
}

export default TodoList;
