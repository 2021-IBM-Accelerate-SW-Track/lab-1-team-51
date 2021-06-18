import React, {useState} from 'react';
import './App.css';
// importing components up here
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // Input is the state & SetInput is the function that allows you to change that value
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>51's To-Do list</h1>
      </header>
      {/* Using Form below almost like an HTML element 
      adding setInputText from above gives us access to it in the Form component*/}
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      {/* Using Todo below almost like an HTML element */}
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;


// Will hook up components to main App.js