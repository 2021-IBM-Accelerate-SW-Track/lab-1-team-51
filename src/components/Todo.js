import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox } from '@material-ui/core';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: '',
            completed: false,
        }
    }

    handleCheckChange = (event) => {
        this.setState({completed: event.target.checked});
    }

    render(){
        console.log(this.props.todo.selectedDate.toString());
        return(
            <div className="todoList">
                <FormControlLabel control={<Checkbox checked={this.state.completed} onChange={this.handleCheckChange} />}
                />
                {this.props.todo.title} created on {this.props.todo.selectedDate.toUTCString()}
            </div>
        );
    }

}

// const Todo = ({text,todo,todos,setTodos}) => {
//     // Events
//     const deleteHandler = () => {
//         // trying to find the the elemnt that matches the todo element I want to delete
//         setTodos(todos.filter(el => el.id !== todo.id))
//     }
//     const completeHandler = () => {
//         setTodos(todos.map(item => {
//             if(item.id === todo.id) {
//                 return {
//                     ...item, completed: !item.completed
//                 }
//             }
//             return item;
//         })
//         );
//     };
//     return (
//        <div className="todo">
//            {/* Todos will be added to ul below */}
//            <li className="todo-item">{text}</li>
//            <Button
//            onClick={completeHandler}
//            className="complete-btn"
//            size="small"
//            variant="contained" 
//            color="primary">
//             Completed
//             </Button>
//             <Button
//             onClick={deleteHandler}
//             className="delete-btn"
//             size="small"
//             variant="contained" 
//             color="secondary">
//             Delete
//             </Button>
//        </div>
//     );
// };

  export default Todo;