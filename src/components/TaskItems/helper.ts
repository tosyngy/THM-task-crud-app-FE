import { getTasks, updateTask, deleteTask } from "../../API";

const fetchTasks = (): Promise<ITask[]> => {
  return getTasks()
    .then(({ data: { tasks } }: { data: { tasks: ITask[] } }) => tasks)
    .catch((err: Error) => {
      console.log(err);
      return []; // Return an empty array to handle the error
    });
};

const UpdateTask = async ( task: ITask): Promise<ApiDataType | undefined> => {
  try {
    const response = await updateTask(task);
    if (response.status !== 200) {
      throw new Error("Error! Task not Updated");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err); // Re-throw the error to be caught at the caller level
  }
};

const DeleteTask = async ( _id: string): Promise<ApiDataType | undefined> => {
  try {
    const response = await deleteTask(_id);
    if (response.status !== 200) {
      throw new Error("Error! Task not Deleted");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err); // Re-throw the error to be caught at the caller level
  }
};




export { DeleteTask, UpdateTask, fetchTasks };
