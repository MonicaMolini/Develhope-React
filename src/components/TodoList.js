import React from "react";

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

    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.Todo.map((el) => <li>{el}</li>)
                    }
                </ul>
                
                <input onChange={this.handleChange} value={this.state.AddTodo} name="Todo"></input>
                <button disabled = {!this.state.AddTodo} onClick={this.handleClick}>Add</button>
                <button onClick={this.handleClearAll}>Clear All</button>
            </div>
        )
    }
}
