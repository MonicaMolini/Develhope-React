import React from "react";

export class Login extends React.Component{
    state = {
        username : "",
        password: ""
    }

    handleChange = (event) =>{
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        })
    }

    handleButton = ()=> {
        this.props.onLogin(this.state)
    }

    render(){
        return (
            <div>
                <input name="username" onChange={this.handleChange} placeholder="Username"></input>
                <input name="password" type="password" onChange={this.handleChange} placeholder="Password"></input>
                <button type="submit" onClick={this.handleButton} disabled = {!this.state.username || !this.state.password}>Login</button>
            </div>
        )
    }
}
