import React, { Component } from 'react';

class AddTask
 extends Component {
    state ={
        taskTitle: '' 
    }

    handleChange= (event)=>{
            this.setState({taskTitle: event.target.value});
    }

    submitFrom= (e)=>{
        e.preventDefault();
        let con = (this.state.taskTitle === ''? alert("Please Enter Descriptions") : (
            this.props.addTaskTodo(this.state.taskTitle) ,
        this.setState({taskTitle:''}))
        )
    }

    render() { 
        return ( 
            <form onSubmit={this.submitFrom} style={{display:'flex' }} >
                <input 
                type="text"
                name="taskTitle" 
                placeholder="Add Todo Task..." 
                style={{flex:'9', background:'#F0F66E' , padding:'10px'}}
                value={this.state.taskTitle}
                onChange={this.handleChange}
                  />
                <input 
                type="submit"  
                value="Add" 
                className="submitBtn" 
                style={{flex:'1'}}
                />
            </form>
         );
    }
}
 
export default AddTask;