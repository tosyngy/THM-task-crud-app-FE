import axios, { AxiosResponse } from "axios"

const baseUrl: string | undefined = process.env.BASE_URL

export const getTasks = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const tasks: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "api/v1/tasks"
    )
    return tasks
  } catch (error) {
    throw new Error("Error fetching task")
  }
}