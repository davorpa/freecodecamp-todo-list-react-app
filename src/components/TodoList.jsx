import React, { useState } from "react";
import "./TodoList.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TodoList() {
    const [tasks, setTasks] = useState([
        { text: "Tarea 1" },
        { text: "Tarea 2", completed: true },
    ]);

    return (
        <React.Fragment>
            <header className="todo-header">
                <h1 className="todo-title">Mis Tareas</h1>
            </header>
            <footer className="todo-footer">
                <TaskForm />
            </footer>
            {tasks.map((task) => (
                <Task text={task.text} completed={task.completed} />
            ))}
        </React.Fragment>
    );
}

export default TodoList;
