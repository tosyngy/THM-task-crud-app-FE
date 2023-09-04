import { addTask } from "../../API";



const handleSaveTask = async ( formData: ITask, token:string): Promise<ApiDataType | undefined> => {
  try {
    const response = await addTask(formData, token);
    if (response?.status !== 201) {
      throw new Error("Error! Task not saved");
    }
    return response.data;
  } catch (err) {
    return Promise.reject(err); // Re-throw the error to be caught at the caller level
  }
};

export {handleSaveTask}