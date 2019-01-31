import React, { Component } from 'react';
import Todos from './component/Todos';
import Header from './component/Header';
import AddTask from './component/AddTask';
import About from './component/About';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    todos : [
        {id:1,
         title: "Task ",
         completed: false 
        },
        {id:2,
          title: "Task  ",
          completed: false 
         },
         {id:3,
          title: "Task ",
          completed: false 
         },
         {id:4,
          title: "Task ",
          completed: false 
         },
         {id:5,
           title: " Task ",
           completed: false 
          },
          {id:6,
           title: "Task ",
           completed: false 
          }
      ]
  }

  handleDeletion = (id)=>{

    const updatedTodos = this.state.todos.filter(task => task.id !== id);

    this.setState({todos:updatedTodos});
  }


  handleChecking = (id) =>{
    const updatedTodos = this.state.todos.map(task =>{
      if(task.id === id){
        task.completed = ! task.completed ;
      }
      return  task ;
    })
    this.setState({todos:updatedTodos});
}


addTaskTodo = (title)=>{
      let lastItem = this.state.todos.slice(-1)[0];
      let newId =lastItem.id + 1;
    const newTodo = {
      id : newId,
      title,
      completed:false 
    }
      this.setState({todos: [...this.state.todos , newTodo]});
}
  render() {
    return (
      <Router>
          <div >
         <Header/>
        <Route exact path="/"  render = {props =>(
          <React.Fragment>
            <AddTask addTaskTodo = {this.addTaskTodo}/>
            <Todos todos= {this.state.todos} handleChecking ={this.handleChecking} handleDeletion= {this.handleDeletion}/>
          </React.Fragment>
        )}/>
        <Route path="/about"  component ={About}/>
        </div>
      </Router> 
    );
  }
}
export default App;
