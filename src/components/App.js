import React from "react";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";

export default function App() {   
    return (
        <div>
         <GithubUser username="MonicaMolini"/> 
         <h3>Add users below:</h3>
         <GithubUserList />
                   
        </div>
    );
}
