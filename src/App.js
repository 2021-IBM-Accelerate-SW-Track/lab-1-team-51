import React, {useState} from 'react';
import './App.css';
// importing components up here
import Form from './components/Form';
import TodoList from './components/TodoList';
// for the date and time here
import DateFnsUtils from '@date-io/date-fns'
import{
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboarddatePicker
}from '@material-ui/pickers'

function App() {
  // Input is the state & SetInput is the function that allows you to change that value
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  const[selectedDate, serSelectedDate] = React.useState(
  new Date("2021-06-18f12:00:00")
)

  const handleDateChange = (date) =>{
     setSelectedDate(date)
}
  // Input is the state & SetInput is the function that allows you to change that value
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify='space-around'>
    <KeyboarddatePicker
    disableToolbar
    variant='inline'
    format='MM/dd/yyyy'
    margin='normal'
    id='date-picker'
    label='Date Picker'
    value={selectedDate}
    onChange={handleDateChange}
    KeyboardButtonProps={{
      'aria-label': 'cahnge-date'
    }}
    />
    <KeyboardTimePicker
    margin='normal'
    id='time-picker'
    label='Time Picker'
    value={selectedDate}
    onChange={handleDateChange}
    KeyboardButtonProps={{
      'aria-label': 'cahnge-date'
    }}
    />

    </Grid>
    </MuiPickersUtilsProvider>
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
