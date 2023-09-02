import React, { useState, ChangeEvent, FormEvent } from 'react';
import { handleUpdateTask } from './helper';
import { useMyContext } from '../../MyContext';

type Props = {
  setTasks: Function
  setEditId: Function
  task: ITask
}

const EditTask: React.FC<Props> = ({ setTasks, task, setEditId }) => {
  const [formData, setFormData] = useState<ITask>({ name: task.name, description: task.description, _id: task._id, status: task.status });
  const { updateContexts } = useMyContext();



  const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleUpdateTask(formData)
      .then((result: ApiDataType | undefined) => {
        if (result) {
          updateContexts(result.tasks)
          setFormData({
            ...formData,
            "name": "",
            "description": "",
          });
          setEditId("")
        }
      })
      .catch((error) => {
        console.error("Error upding task:", error);
      });
  };

  return (
    <form className='Form edit' onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' value={formData.name} />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            onChange={handleForm}
            type='text'
            id='description'
            value={formData.description}
          />
        </div>
      </div>
      <button disabled={!formData.name || !formData.description} className={(!formData.name || !formData.description) ? "disabled" : ""}>Save</button>
      <button className='close' onClick={()=>setEditId("")} type='button'>Close</button>
    </form>
  );
};

export default EditTask;
