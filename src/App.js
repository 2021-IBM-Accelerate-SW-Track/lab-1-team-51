/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
// importing components up here
import Form from './components/Form';
import TodoList from './components/TodoList';
// for the date and time here
import DateFnsUtils from '@date-io/date-fns'
import{
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
}from '@material-ui/pickers'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
      todos: [],
      selectedDate: new Date("2021-06-18f12:00:00")}
  }

  handleDateChange = (date) => {
    this.setState({selectedDate: date})
  }

  renderComponents = () => {
    return (
      <div className="main">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify='space-around'>
        <KeyboardDatePicker disableToolbar variant='inline' format='MM/dd/yyyy' margin='normal' id='date-picker' label='Date Picker' value={this.state.selectedDate} onChange={this.handleDateChange}
        KeyboardButtonProps={{'aria-label': 'cahnge-date'}}/>
        <KeyboardTimePicker margin='normal' id='time-picker' label='Time Picker' value={this.state.selectedDate} onChange={this.handleDateChange}
        KeyboardButtonProps={{'aria-label': 'cahnge-date'}}/>
        </Grid>
        </MuiPickersUtilsProvider>
      </div>
    )
  };

  render() {
    return (
      <div className="App">
        <header>
        <h1>51's To-Do list</h1>
        </header>
        {/* Using Form below almost like an HTML element 
        adding setInputText from above gives us access to it in the Form component*/}
        <Form inputText={this.state.inputText} todos={this.state.todos} />
        {/* Using Todo below almost like an HTML element */}
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;