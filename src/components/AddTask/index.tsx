import React, { useState, ChangeEvent, FormEvent } from 'react';
import { handleSaveTask } from './helper';
import { useMyContext } from '../../MyContext';
import { checkInput } from '../utils/validator';


const AddTask: React.FC = () => {
  const [formData, setFormData] = useState<ITask>({ name: '', description: '', _id: '', status: false });
  const { updateContexts, token } = useMyContext();


  const handleForm = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSaveTask(formData, token)
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
          <input onChange={handleForm} type='text' id='name' value={formData.name} required />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            onChange={handleForm}
            type='text'
            id='description'
            value={formData.description}
            required
          />
        </div>
      </div>
      <button disabled={!!checkInput(formData.name, formData.description)}
        className={checkInput(formData.name, formData.description) ? "disabled" : ""}>Add Task</button>
    </form>
  );
};

export default AddTask;
