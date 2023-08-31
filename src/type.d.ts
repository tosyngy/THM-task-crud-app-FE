interface ITask {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
  }
  
  interface TaskProps {
    task: ITask
  }
  
  type ApiDataType = {
    message: string
    status: string
    tasks: ITask[]
    task?: ITask
  }