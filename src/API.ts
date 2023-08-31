import axios, { AxiosResponse } from "axios"

const baseUrl: string | undefined = process.env.REACT_APP_BASE_URL

export const getTasks = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const tasks: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/tasks`,
    )
    return tasks
  } catch (error) {
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
      throw new Error("Error adding task")
    }
  }

  export const updateTask = async (
    task: ITask
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const taskUpdate: Pick<ITask, "status"> = {
        status: true,
      }
      const updatedTask: AxiosResponse<ApiDataType> = await axios.put(
        `${baseUrl}/edit-task/${task._id}`,
        taskUpdate
      )
      return updatedTask
    } catch (error) {
      throw new Error("Error updating task")
    }
  }

  export const deleteTask = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const deletedTask: AxiosResponse<ApiDataType> = await axios.delete(
        `${baseUrl}/delete-task/${_id}`
      )
      return deletedTask
    } catch (error) {
      throw new Error("Error deleting task")
    }
  }