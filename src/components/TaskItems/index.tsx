import React, { useEffect } from "react";
import { fetchTasks, } from "./helper";
import AddTask from "../AddTask";
import Task from "./task";
import { useMyContext } from '../../MyContext';

const Tasks: React.FC = () => {
  const { tasks, updateContexts } = useMyContext();


  useEffect(() => {
    fetchTasks().then(data => {
      updateContexts(data)
    })
  }, [updateContexts]);

  return (
    <div className="Page">
      <AddTask setTasks={updateContexts} />
      <div className="scroll">
        {tasks.map((task, index) => (
          <Task task={task}  key={index} />
        ))}
      </div>
    </div>
  );
};


export default Tasks;
