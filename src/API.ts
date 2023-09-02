import axios, { AxiosResponse } from "axios"

const baseUrl: string | undefined = "http://localhost:4000/api/v1"

export const getTasks = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const tasks: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/tasks`,
    )
    return tasks
  } catch (error) {
    console.log(error)
    throw new Error("Error fetching task")
  }
}

export const addTask = async (
  formData: ITask
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const task: Omit<ITask, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const saveTask: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/add-task`,
      task
    )
    return saveTask
  } catch (error) {
    console.log(error)
    throw new Error("Error adding task")
  }
}

export const updateTask = async (
  task: ITask
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const taskUpdate: ITask =task

    const updatedTask: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/task/${task._id}`,
      taskUpdate
    )
    return updatedTask
  } catch (error) {
    console.log(error)
    throw new Error("Error updating task")
  }
}

export const deleteTask = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTask: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/task/${_id}`
    )
    return deletedTask
  } catch (error) {
    console.log(error)
    throw new Error("Error deleting task")
  }
}