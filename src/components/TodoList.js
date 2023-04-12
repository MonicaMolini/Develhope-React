import React from "react";

export class TodoList extends React.Component{
    state = {
        Todo: ["Fare la spesa", "Pulire","Andare alla Posta", "Riunione"],
        AddTodo: ""
    }

    handleChange = (event) => {
        this.setState({
            AddTodo: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            Todo: [...this.state.Todo, this.state.AddTodo]
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
                
                <input onChange={this.handleChange} name="Todo"></input>
                <button disabled = {!this.state.AddTodo} onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}
