import React from 'react';

const CalendarSyncButton = ({ taskId }) => {
  const syncTaskWithCalendar = async () => {
    const response = await fetch(`/api/tasks/${taskId}/sync`, {
      method: 'POST',
    });
    const data = await response.json();
    console.log('Event created:', data);
  };

  return (
    <button onClick={syncTaskWithCalendar}>Sync with Calendar</button>
  );
};

export default CalendarSyncButton;
