import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TASKS,
} from "./actionTypes";


export const addNewTask = (task: AddTask) => {
  return {
    type: ADD_TASK,
    payload: {
      name: task.name,
      description: task?.description,
    },
  };
};

export const deleteTask = (id: number) => {
  return {
    type: DELETE_TASK,
    id,
  };
};

export const updateTask = (id: number, task: AddTask) => {
  return {
    type: UPDATE_TASK,
    payload: {
      _id: id,
      name: task?.name,
      description: task?.description,
    },
  };
};

export const tasks = (tasks: ITask[]) => {
  return {
    type: TASKS,
    payload: {
      tasks
    },
  };
};
