import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    TASKS
} from "../actions/actionTypes";



interface TaskState {
    tasks: ITask[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskReducer = (state: TaskState = initialState, action: any) => {
    switch (action.type) {
        case ADD_TASK:
            const { name, description, status = false } = action.payload;
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        title: name,
                        description: description,
                        status: status,
                    },
                ],
                isEdit: action.isEdit,
            };
        case DELETE_TASK:
            const newTaskList = state.tasks.filter((item) => item._id !== action.id);
            return {
                ...state,
                tasks: newTaskList,
            };

        case TASKS:
            return {
                ...state,
                tasks: state.tasks,
            };

        case UPDATE_TASK:
            const payload = action.payload;
            let { id } = action.payload;
            const tasks = state.tasks.filter((task) => {
                return task._id !== payload.id;
            });

            const task = state.tasks.find((task) => task?._id === id);
            if (task) {
                task.name = payload.name;
                task.description = payload.description;
                task.status = payload.status;
                tasks.push(task);
            }

            return {
                ...state,
                tasks: [...tasks],
                isEdit: false,
            };

        default:
            return state;
    }
};

export default taskReducer;
