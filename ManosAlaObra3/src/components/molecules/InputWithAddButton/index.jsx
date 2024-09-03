import React from 'react';

function InputWithAddButton({ taskInput, onTaskInputChange, onAddTask }) {
  return (
    <div className="input-container">
      <input 
        type="text" 
        value={taskInput} 
        onChange={onTaskInputChange} 
        placeholder="Escribe una tarea"
      />
      <button onClick={onAddTask}>ADD</button>
    </div>
  );
}

export default InputWithAddButton;
