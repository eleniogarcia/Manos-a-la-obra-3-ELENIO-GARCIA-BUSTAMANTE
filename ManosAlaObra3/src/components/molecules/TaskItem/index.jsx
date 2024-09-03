import React from 'react';

function TaskItem({ taskName, completed, onToggleComplete, onDelete }) {
  return (
    <li className={`task-item ${completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={onToggleComplete} 
      />
      <span className="task-name">{taskName}</span>
      <button className="delete-button" onClick={onDelete}>
        🗑️
      </button>
    </li>
  );
}

export default TaskItem;
