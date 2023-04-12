import React from "react";

export class UncontrolledLogin extends React.Component{
    componentDidMount() {
        this.refInput.focus();
      } 

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
                    <input ref={(focus) => {this.refInput = focus}} name="sername" placeholder="Username"></input>
                    <input name="password" type="password" placeholder="Password"></input>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
           
            </div>
        )
    }
}