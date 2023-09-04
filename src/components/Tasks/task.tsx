import { DeleteTask, UpdateTask } from "./helper";
import { useMyContext, } from '../../MyContext';
import React from "react";

const Task: React.FC<TaskProps> = ({ task, setEditId }) => {
    const checkTask: string = task.status ? `line-through` : "";
    const { updateContexts, token } = useMyContext();

    const handleUpdateTask = (e: React.FormEvent, task: ITask) => {
        e.preventDefault();
        task.status = !task.status
        const resp = UpdateTask(task, token);
        resp.then((result: ApiDataType | undefined) => {
            if (result) {
                updateContexts(result.tasks)
            }
        })
            .catch((error) => {
                console.error("Error saving task:", error);
            });

    }

    const handleDeleteTask = (e: React.FormEvent, id: string) => {
        const opt = window.confirm("Please confirm you mean to delete this item?")
        console.assert(opt)
        if (!opt) {
            return false
        }
        e.preventDefault();
        const resp = DeleteTask(id, token)
        resp.then((result: ApiDataType | undefined) => {
            if (result) {
                updateContexts(result.tasks)
            }
        })
            .catch((error) => {
                console.error("Error saving task:", error);
            });

    }


    return (
        <div className="Card" id='task'>
            <div className="Card--text">
                <h1 className={checkTask}>{task.name}</h1>
                <span className={checkTask}>{task.description}</span>
            </div>
            <div className="Card--button">
                <button
                    onClick={(e) => handleUpdateTask(e, task)}
                    className={task.status ? `strike-button` : "Card--button__done"}
                >
                    {task.status ? `Uncomplete` : "Complete"}
                </button>
                <button
                    onClick={(e) => setEditId(task._id)}
                    className={"Card--button__edit"}
                >
                    Edit
                </button>

                <button
                    onClick={(e) => handleDeleteTask(e, task._id)}
                    className="Card--button__delete"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};


export default Task
