import React, { useState } from "react";
import "./TodoList.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TodoList() {
    const [tasks, setTasks] = useState([
        { text: "Tarea 1" },
        { text: "Tarea 2", completed: true },
    ]);

    const addTask = (task) => {
        console.log("tarea agregada", task);
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
