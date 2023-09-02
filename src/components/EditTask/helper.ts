import { updateTask } from "../../API";


/**
 * handleUpdateTask
 *
 * @param {Object} ITask
 */
const handleUpdateTask = async ( task: ITask): Promise<ApiDataType | undefined> => {
  try {
    const response = await updateTask(task);
    if (response.status !== 200) {
      throw new Error("Error! Task not Updated");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export {handleUpdateTask}