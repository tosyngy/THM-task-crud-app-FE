import { getTasks, updateTask, deleteTask } from "../../API";

const FetchTasks = (token: string): Promise<ITask[]> => {
  return getTasks(token)
    .then(({ data: { tasks } }: { data: { tasks: ITask[] } }) => tasks)
    .catch((err: Error) => {
      return [];
    });
};

const UpdateTask = async ( task: ITask, token: string): Promise<ApiDataType> => {
  try {
    const response = await updateTask(task, token);
    if (response.status !== 200) {
      throw new Error("Error! Task not Updated");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

const DeleteTask = async ( _id: string, token: string): Promise<ApiDataType> => {
  try {
    const response = await deleteTask(_id, token);
    if (response.status !== 200) {
      throw new Error("Error! Task not Deleted");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};




export { DeleteTask, UpdateTask, FetchTasks };
