import React, { useState } from 'react';
import './App.css';
import InputWithAddButton from './components/molecules/InputWithAddButton';
import TaskList from './components/molecules/TaskList';
import Title from './components/atoms/Title';
function App() {
  const [tasks, setTasks] = useState([
    { name: 'Task N', completed: false },
    { name: 'Task N-1', completed: false },
    { name: 'Completed Task N-2', completed: true },
    { name: 'Task K', completed: false },
    { name: 'Task 2', completed: false },
    { name: 'Completed Task 1', completed: true },
  ]);

  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([{ name: taskInput, completed: false }, ...tasks]);
      setTaskInput('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
       <Title />
      <InputWithAddButton 
        taskInput={taskInput} 
        onTaskInputChange={(e) => setTaskInput(e.target.value)} 
        onAddTask={handleAddTask}
      />
      <TaskList 
        tasks={tasks} 
        onToggleComplete={handleToggleComplete} 
        onDelete={handleDelete} 
      />
    </div>
  );
}


export default App;
