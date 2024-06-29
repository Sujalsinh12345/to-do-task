import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
        Status: {task.status}
      </div>
      <Link to={`/tasks/${task.id}`}>View Details</Link>
    </div>
  );
};

export default TaskItem;
