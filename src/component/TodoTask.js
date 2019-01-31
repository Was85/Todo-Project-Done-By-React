import React, { Component } from 'react';

class TodoTask
 extends Component {

    getStyle = ()=>{
            return {textDecoration : this.props.task.completed ? 'line-through' : 'none',
            padding:'10px',
            background:'#f4f4f4',
            borderBottom:'2px #588B8B dotted'
        }
    }

   
    render() { 
        const {id} = this.props.task ;
        return ( 
            <div style={this.getStyle()} >
         
                <p>
                <input type="checkbox" onChange={()=> this.props.handleChecking(id)} /> {"  "}
                {this.props.task.title}
                <button  style={buttonStyles}  onClick={()=>this.props.handleDeletion(id)} >X</button>
                </p>
            </div>
        );
    }
}
 
const buttonStyles ={
    background:'#C20114',
    borderRadius:'50%',
    color:'#fff',
    padding:'5px 8px',
    border:'none',
    float:'right'
}
export default TodoTask;