import React, { useState, ChangeEvent, FormEvent } from 'react';
import { handleSaveTask } from './helper';
import { useMyContext } from '../../MyContext';

type Props = {
  setTasks: Function
}

const AddTask: React.FC<Props> = ({ setTasks }) => {
  const [formData, setFormData] = useState<ITask>({ name: '', description: '', _id: '', status: false });
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
    handleSaveTask(e, formData)
      .then((result: ApiDataType | undefined) => {
        if (result) {
          updateContexts(result.tasks)
          setFormData({
            ...formData,
            "name": "",
            "description": "",
          });
        }
      })
      .catch((error) => {
        console.error("Error saving task:", error);
      });
  };

  return (
    <form className='Form' onSubmit={handleSubmit}>
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
      <button disabled={!formData.name || !formData.description}>Add Task</button>
    </form>
  );
};

export default AddTask;
