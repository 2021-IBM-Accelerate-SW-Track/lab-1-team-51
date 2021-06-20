import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

// Simpler way of adding ,todos, etc without using props
const Form = ({setInputText, todos, setTodos, inputText}) => {
  // Here I will write JS code
  // e is the event we want to happen
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
    // stops page from refreshing
    e.preventDefault()
    setTodos([
      ...todos,{text: inputText, completed: false,id: Math.random()*1000 }
    ]);
    setInputText("");
  }
    return (
        <form>
        <TextField
          onChange={inputTextHandler}
          // To change these state of button back we needed to add a value to get into to change to the state
          value={inputText}
          id="filled-textarea"
          label="Write Todo Here"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />

        <Button
        onClick={submitTodoHandler}
        variant="contained" 
        color="primary">
        Submit Todo
        </Button>

    </form>
    );
}

export default Form;

// This is my actual form where people will input what they want and/or check of as completed or uncompleted.

// Find a way to get data I've input into "state" (Js object that stores the dynamic data and allows us to keep track of the changes) so i can move it into my ToDo list