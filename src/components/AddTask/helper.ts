import { addTask } from "../../API";



const handleSaveTask = async ( formData: ITask, token:string): Promise<ApiDataType> => {
  try {
    const response = await addTask(formData, token);
    if (response.status !== 201) {
      throw new Error("Error! Task not saved");
    }
    return Promise.resolve(response.data) as Promise<ApiDataType> ;
  } catch (err) {
    return Promise.reject(err); 
  }
};

export {handleSaveTask}