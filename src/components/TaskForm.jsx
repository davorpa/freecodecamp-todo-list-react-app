import React from "react";
import { BsClipboardPlus } from "react-icons/bs";
import "./TaskForm.css";

function TaskForm(props) {
    return (
        <form className="task-form">
            <input
                type="text"
                name="text"
                className="task-input"
                placeholder="Escribe una tarea"
                autoComplete="off"
            />
            <button className="task-btn" aria-label="Agregar tarea">
                <BsClipboardPlus />
            </button>
        </form>
    );
}

export default TaskForm;
