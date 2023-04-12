import React from "react";
import { Render } from "./Render";

export class TodoList extends React.Component{
    state = {
        Todo: [],
        AddTodo: ""
    }

    handleChange = (event) => {
        this.setState({
            AddTodo: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            Todo: [...this.state.Todo, this.state.AddTodo],
            AddTodo: ""
        })
    }
    handleClearAll = () =>{
        this.setState({
            Todo: [],
            todo: ""
        })
    }
    handleRemove = (event) =>{
        this.setState({
            Todo: this.state.Todo.filter(el => el !== event.target.value)
        })
    }

    render(){
        return (
            <div>                
                <Render state={this.state} handleRemove={this.handleRemove}></Render>                
                <input onChange={this.handleChange} value={this.state.AddTodo} name="Todo"></input>
                <button disabled = {!this.state.AddTodo} onClick={this.handleClick}>Add</button>
                <button onClick={this.handleClearAll}>Clear All</button>
            </div>
        )
    }
}
