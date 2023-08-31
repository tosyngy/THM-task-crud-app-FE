import { DeleteTask, UpdateTask } from "./helper";
import { useMyContext } from '../../MyContext';

const Task: React.FC<TaskProps> = ({ task }) => {
    const checkTask: string = task.status ? `line-through` : "";
    const { updateContexts } = useMyContext();

    const handleUpdateTask = (e: React.FormEvent, task: ITask) => {
        e.preventDefault();
        const resp = UpdateTask(task);
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
        e.preventDefault();
        const resp = DeleteTask(id)
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
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTask}>{task.name}</h1>
                <span className={checkTask}>{task.description}</span>
            </div>
            <div className="Card--button">
                <button
                    onClick={(e) => handleUpdateTask(e, task)}
                    className={task.status ? `hide-button` : "Card--button__done"}
                >
                    Complete
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
