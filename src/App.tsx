import React, { useState } from 'react'
import TaskItem from './components/TaskItem'
import { MyContext } from "./MyContext";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const updateContexts = (newTasks: ITask[]) => {
    setTasks(newTasks);
  };

  return (
    <main className='App'>
      <h1><img src="/banner.png" alt="TryHackMe Test" className='banner' /></h1>
      <MyContext.Provider value={{ tasks, updateContexts }}>
        <TaskItem />
      </MyContext.Provider>
    </main>
  )
}

export default App