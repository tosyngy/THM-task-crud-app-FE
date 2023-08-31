interface ITask {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
  }
  
  interface TaskProps {
    todo: ITask
  }
  
  type ApiDataType = {
    message: string
    status: string
    todos: ITask[]
    todo?: ITask
  }