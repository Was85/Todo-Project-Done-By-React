import React, { Component } from 'react';
import TodoTask from  './TodoTask';

class Todos extends Component {
    render() { 
        return (
            <div >
                {this.props.todos.map((task) => (
                <TodoTask key={task.id} task={task}  handleDeletion = {this.props.handleDeletion} handleChecking ={this.props.handleChecking} />
                ))}
            </div>
        );
    }
}
 
export default Todos;