/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
// import DateFnsUtils from '@date-io/date-fns';
import Immutable from 'immutable';
// import{
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker
// }from '@material-ui/pickers'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      title: '',
      todos: new Immutable.Map(),
      selectedDate: ''}
  }

  handleDateChange = (date) => {
    this.setState({selectedDate: date})
  }

  handleAdd = (name) => {
    console.log('powwow');
    let today = new Date();
    const todo = {
      title: name,
      selectedDate: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds()),
    };

    this.setState((prevState) => ({
      todos: prevState.todos.set(prevState.id, todo),
      id: prevState.id + 1,
    }));

    console.log(this.state.todos);

  }

  // renderComponents = () => {
  //   return (
  //     <div className="main">
  //       <MuiPickersUtilsProvider utils={DateFnsUtils}>
  //       <KeyboardDatePicker disableToolbar variant='inline' format='MM/dd/yyyy' margin='normal' id='date-picker' label='Date Picker' value={this.state.selectedDate} onChange={this.handleDateChange}
  //       KeyboardButtonProps={{'aria-label': 'cahnge-date'}}/>
  //       <KeyboardTimePicker margin='normal' id='time-picker' label='Time Picker' value={this.state.selectedDate} onChange={this.handleDateChange}
  //       KeyboardButtonProps={{'aria-label': 'cahnge-date'}}/>
  //       </MuiPickersUtilsProvider>
  //     </div>
  //   )
  // };

  render() {
    const myTodos = this.state.todos.entrySeq().map(([id, todo]) => {
      return <Todo id={id} todo={todo} />;
    });
    return (
      <div id="App">
        <div id="header_area">
          <h1>Lab 1: Team 51</h1>
        </div>
        <div id="formContainer">
          <Form handleAdd={this.handleAdd}/>
        </div>
        <div id="todoContainer">
          {myTodos}
        </div>
      </div>
    );
  }
}

export default App;