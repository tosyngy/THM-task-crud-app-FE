import React, { Suspense, useState } from 'react'
import Tasks from './components/Tasks'
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
        <Suspense fallback={"Loading ..."}>
           <Tasks />
        </Suspense>
       
      </MyContext.Provider>
    </main>
  )
}

export default App