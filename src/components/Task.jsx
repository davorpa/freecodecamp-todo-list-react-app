import React from "react";
import "./Task.css";
import { BsTrash } from "react-icons/bs";

function Task({
    /** @type string */ id,
    /** @type string */ className,
    /** @type string */ text,
    /** @type boolean */ completed,
    /** @type Function */ onComplete,
    /** @type Function */ onDelete,
}) {
    let cssClass = "task";
    className && (cssClass += " " + className);
    onComplete && (cssClass += " completable");
    onDelete && (cssClass += " deletable");
    completed && (cssClass += " completed");

    const handleComplete = () => onComplete && onComplete(id);

    const handleDelete = () => onDelete && onDelete(id);

    return (
        <div className={cssClass} data-id={id}>
            <div className="task-text" onClick={handleComplete}>
                {text}
            </div>
            <div className="task-actions">
                <button
                    className="btn"
                    aria-label="Eliminar"
                    onClick={handleDelete}
                >
                    <BsTrash />
                </button>
            </div>
        </div>
    );
}

export default Task;
