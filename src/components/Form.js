import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
    };
  }

  onInputChange = (event) => {
    this.setState({inputText: event.target.value});
    console.log(event.target.value);
  }

  onButtonSubmit = (event) => {
    this.props.handleAdd(this.state.inputText);
    this.setState({ inputText: '' });
  }

  render() {
    return (
      <form>
        <div id="textInput">
          <TextField id="submit" fullWidth={true} onChange={this.onInputChange} value={this.state.inputText} placeholder="Placeholder" multiline variant="filled"/>
        </div>
        <div id="todoButton">
          <Button id="addTodo" onClick={this.onButtonSubmit} variant="contained" color="primary">
            Add Todo
          </Button>
        </div>
    </form>
    );
  }
}

export default Form;

// This is my actual form where people will input what they want and/or check of as completed or uncompleted.
// Find a way to get data I've input into "state" (Js object that stores the dynamic data and allows us to keep track of the changes) so i can move it into my ToDo list