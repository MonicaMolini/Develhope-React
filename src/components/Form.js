import React from "react";
import useForm from "./hooks/useForm";

export default function Form() {
    const { username, password, handleChange } = useForm();
    return (
      <form>
        <input onChange={handleChange} value={username} name="username" placeholder="Username" />
        <input onChange={handleChange} value={password} name="password" type="password" placeholder="Password"/>
        {(username !== "" || password !== "") && JSON.stringify({ username, password })}
      </form>
    );
}
