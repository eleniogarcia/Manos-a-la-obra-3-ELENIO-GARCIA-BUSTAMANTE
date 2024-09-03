import React from 'react';
import TaskItem from '../TaskItem';

function TaskList({ tasks, onToggleComplete, onDelete }) {
  if (tasks.length === 0) {
    return <p>No hay tareas en la lista.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem 
          key={index}
          taskName={task.name}
          completed={task.completed}
          onToggleComplete={() => onToggleComplete(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
