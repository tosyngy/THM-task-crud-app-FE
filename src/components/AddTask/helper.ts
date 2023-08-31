import { addTask } from "../../API";

const handleSaveTask = async (e: React.FormEvent, formData: ITask): Promise<ApiDataType | undefined> => {
  e.preventDefault();
  try {
    const response = await addTask(formData);
    if (response.status !== 201) {
      throw new Error("Error! Task not saved");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err); // Re-throw the error to be caught at the caller level
  }
};

export {handleSaveTask}