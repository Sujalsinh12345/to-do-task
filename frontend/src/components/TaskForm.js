import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

const TaskForm = () => {
  const { handleCreateTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleCreateTask({ title, description });
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        required 
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
