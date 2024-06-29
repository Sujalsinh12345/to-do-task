import React, { useState } from 'react';

const DependencyManagement = ({ taskId }) => {
  const [dependencyId, setDependencyId] = useState('');

  const addDependency = async () => {
    const response = await fetch(`/api/tasks/${taskId}/dependencies`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dependencyId }),
    });
    const data = await response.json();
    console.log('Updated task:', data);
  };

  return (
    <div>
      <input 
        type="text" 
        value={dependencyId} 
        onChange={(e) => setDependencyId(e.target.value)} 
        placeholder="Dependency ID" 
      />
      <button onClick={addDependency}>Add Dependency</button>
    </div>
  );
};

export default DependencyManagement;
