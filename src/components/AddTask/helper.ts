import { addTask } from "../../API";


/**
 * handleSaveTask
 *
 * @param {Object} ITask
 */
const handleSaveTask = async ( formData: ITask): Promise<ApiDataType | undefined> => {
  try {
    const response = await addTask(formData);
    if (response?.status !== 201) {
      throw new Error("Error! Task not saved");
    }
    return response.data;
  } catch (err) {
    return Promise.reject(err); // Re-throw the error to be caught at the caller level
  }
};

export {handleSaveTask}