import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TodoList() {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), text: "Tarea 1" },
        { id: uuidv4(), text: "Tarea 2", completed: true },
    ]);

    const addTask = (task) => {
        if (task.text) {
            // merge with defaults
            task = Object.assign({}, { id: uuidv4(), completed: false }, task);
            // prepend
            setTasks([task, ...tasks]);
        }
    };

    const completeTask = (taskId) => {
        console.log("tarea completada", taskId);
    };

    const removeTask = (taskId) => {
        console.log("tarea eliminada", taskId);
    };

    return (
        <React.Fragment>
            <header className="todo-header">
                <h1 className="todo-title">Mis Tareas</h1>
            </header>
            <footer className="todo-footer">
                <TaskForm onSubmit={addTask} />
            </footer>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    onComplete={completeTask}
                    onDelete={removeTask}
                />
            ))}
        </React.Fragment>
    );
}

export default TodoList;
