import React from "react";
import "./Task.css";
import { BsTrash } from "react-icons/bs";

function Task({
    /** @type string */ className,
    /** @type string */ text,
    /** @type boolean */ completed,
}) {
    let cssClass = "task";
    className && (cssClass += " " + className);
    completed && (cssClass += " completed");
    return (
        <div className={cssClass}>
            <div className="task-text">{text}</div>
            <div className="task-actions">
                <button className="btn" aria-label="Eliminar">
                    <BsTrash />
                </button>
            </div>
        </div>
    );
}

export default Task;
