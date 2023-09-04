import axios, { AxiosResponse } from "axios"
const baseUrl: string | undefined = "http://localhost:4000/api/v1"

export const login = async (user_data: IUser): Promise<AxiosResponse<LoginDataType>> => {
  try {
    const user: AxiosResponse<LoginDataType> = await axios.post(
      `${baseUrl}/auth/login`,
      user_data,

    )
    return user
  } catch (error) {
    console.log(error)
    throw new Error("Error  while logining")
  }
}

export const register = async (user_data: IUser): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const user: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/auth/register`,
      user_data
    )
    return user
  } catch (error) {
    console.log(error)
    throw new Error("Error while registering")
  }
}

export const getTasks = async (token: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const tasks: AxiosResponse<ApiDataType> = await axios.get(
      `${baseUrl}/tasks`, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'
      }
    }
    )
    return tasks
  } catch (error) {
    console.log(error)
    throw new Error("Error fetching task")
  }
}

export const addTask = async (
  formData: ITask, token: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const task: Omit<ITask, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const saveTask: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/task`,
      task, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'
      }
    }
    )
    return saveTask
  } catch (error) {
    console.log(error)
    throw new Error("Error adding task")
  }
}

export const updateTask = async (
  task: ITask,
  token: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const taskUpdate: ITask = task

    const updatedTask: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/task/${task._id}`,
      taskUpdate, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'
      }
    }
    )
    return updatedTask
  } catch (error) {
    console.log(error)
    throw new Error("Error updating task")
  }
}

export const deleteTask = async (
  _id: string,
  token: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTask: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/task/${_id}`, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'content-type': 'application/json'
      }
    }
    )
    return deletedTask
  } catch (error) {
    console.log(error)
    throw new Error("Error deleting task")
  }
}