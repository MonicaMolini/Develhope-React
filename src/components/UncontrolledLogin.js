import React from "react";

export class UncontrolledLogin extends React.Component{
    handleLogin = (event)=> {
        event.preventDefault()
        const state = {
            username: event.target.elements.username.value, 
            password: event.target.elements.username.value, 
        }
        this.props.onLogin(state)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input name="username" placeholder="username"></input>
                    <input name="password" type="password" placeholder="password"></input>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
           
            </div>
        )
    }
}