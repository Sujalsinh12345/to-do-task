import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTask } from '../services/tasks';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const getTask = async () => {
      try {
        const { data } = await fetchTask(id);
        setTask(data);
      } catch (error) {
        console.error(error);
      }
    };
    getTask();
  }, [id]);

  return task ? <div>{task.title}</div> : <div>Loading...</div>;
};

export default TaskDetail;
