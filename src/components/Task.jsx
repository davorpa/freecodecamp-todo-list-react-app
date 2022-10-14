import React from "react";
import "./Task.css";

function Task({ className, text, completed }) {
    let cssClass = "task";
    className && (cssClass += " " + className);
    completed && (cssClass += " completed");
    return (
        <div className={cssClass}>
            <div className="task-text">{text}</div>
            <div className="task-actions">
                <button className="btn">❌</button>
            </div>
        </div>
    );
}

export default Task;
