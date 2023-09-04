interface ITask {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
  }

  interface IUser{
    _id?: string
    username: string
    password: string
  }

  type LoginDataType = {
    user: {_id: string, username: string}
    token: string
  }

  type ErrorDataType = {
    message: string
    status: Number
  }
  
  interface TaskProps {
    task: ITask
    setEditId: Function
  }
  
  type ApiDataType = {
    message: string
    status: string
    tasks: ITask[]
    task?: ITask
  }

  interface AddTask {
    name: string
    description: string
    status?: boolean
}

interface IRootState{
  tasks?: ITask[]
  taskReducer: any

}