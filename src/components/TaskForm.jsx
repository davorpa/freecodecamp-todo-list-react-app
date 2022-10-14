import React, { useState } from "react";
import { BsClipboardPlus } from "react-icons/bs";
import "./TaskForm.css";

function TaskForm({ /** @type Function */ onSubmit }) {
    const [input, setInput] = useState("");

    const handleInputChange = (/** @type Event */ event) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = (/** @type Event */ event) => {
        event.preventDefault();
        onSubmit &&
            onSubmit({
                text: input,
                completed: false,
            });
        setInput("");
    };

    return (
        <form className="task-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="text"
                className="task-input"
                placeholder="Escribe una tarea"
                autoComplete="off"
                value={input}
                required={true}
                onChange={handleInputChange}
            />
            <button className="task-btn" aria-label="Agregar tarea">
                <BsClipboardPlus />
            </button>
        </form>
    );
}

export default TaskForm;
