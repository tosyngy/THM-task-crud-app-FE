import React, { useEffect, useState } from "react";
import { FetchTasks, } from "./helper";
import AddTask from "../AddTask";
import Task from "./task";
import { useMyContext } from '../../MyContext';
import EditTask from "../EditTask";

const Tasks: React.FC = () => {
  const { tasks, updateContexts, token, updateTokenContexts } = useMyContext();
  const [editId, setEditId] = useState<String>("")


  useEffect(() => {
    FetchTasks(token).then(data => {
      updateContexts(data)
    })
  }, []);

  const logout = () => {
    updateTokenContexts('');
  }

  return (
    <div className="Page">
      <AddTask />
      <div className="scroll">
        {tasks.length ? tasks.map((task, index) => (
          editId === task._id ?
            <EditTask task={task} key={index} setEditId={setEditId} />
            : <Task task={task} key={index} setEditId={setEditId} />
        )) :
          <div className="text-muted p-3 text-center">No task registered yet!</div>
        }
      </div>
      <div className='text-center'>

        <button className="btn-link" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};


export default Tasks;
