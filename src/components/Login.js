import React from "react";
import { useState } from "react";

export function Login({onLogin}){
    const [data, setData] = useState({
        username: "", 
        password: "",
        remember: false
    })

    const handleChange = (event) =>{
        const { name, type, value, checked } = event.target;
        setData((data) => ({
            ...data,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleButton = ()=> {
        onLogin(
            data
        )
    }

    return (
        <div>
            <input name="username" onChange={handleChange} placeholder="Username"></input>
            <input name="password" type="password" onChange={handleChange} placeholder="Password"></input>
            <input name="remember" type="checkbox"/>
            <button onClick={handleButton} disabled = {!data.username || !data.password}>Login</button>
        </div>
    )
}