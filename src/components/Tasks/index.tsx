import React, { useEffect, useState } from "react";
import { fetchTasks, } from "./helper";
import AddTask from "../AddTask";
import Task from "./task";
import { useMyContext } from '../../MyContext';
import EditTask from "../EditTask";

const Tasks: React.FC = () => {
  const { tasks, updateContexts } = useMyContext();
  const [editId, setEditId] = useState<String>("")


  useEffect(() => {
    fetchTasks().then(data => {
      updateContexts(data)
    })
  }, []);

  return (
    <div className="Page">
      <AddTask setTasks={updateContexts} />
      <div className="scroll">
        {tasks.map((task, index) => (
          editId === task._id ?
            <EditTask task={task} key={index} setTasks={updateContexts} setEditId={setEditId}/>
            : <Task task={task} key={index} setEditId={setEditId}/>
        ))}
      </div>
    </div>
  );
};


export default Tasks;
