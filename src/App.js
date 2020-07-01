/**
 * Clear project
 * Create a Component folder within Src folder
 * Create a ToDoForm.js file in Components
 * Create a ToDoList.js file in Components
 * 
 * Display todos in a nice Material Design fashion
 * Allow adding todos via input
 * Delete todos
 * 
 * 
 * Create function save ToDo
 * (Simply merge the existing todos with our new one, 
 * extra whitespace cut out.)
 * Add ToDoList props deletetodo with const filter 
 * and set todos to new value
 * 
 */

import React, { useState } from 'react';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);

  const saveTodo = (todoText) => {
    const trimmedText = todoText.trim();
  
    if(trimmedText.length > 0){
      setTodos([...todos, trimmedText])
    }
  }

  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm saveTodo={saveTodo}/>
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
