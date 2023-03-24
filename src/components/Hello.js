import React from "react"


function sum(a, b){
    return <h2>The sum is: {a +b}!</h2>
} 

export default class Sum extends React.Component{
    render(){
        return sum(2, 9)
    }
}