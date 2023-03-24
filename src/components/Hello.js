import React from "react"


function sayHello(name){
    return <h1>Hello, {name}!</h1>
} 

export default class Hello extends React.Component{
    render(){
        return sayHello("Nino")
    }
}