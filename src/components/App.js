import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export default class App extends Component {
  state = {
    language: "en",
};

handleLanguageChange = (event) =>{
    this.setState({
        language: event.target.value
    })
}

render() {
    return (
        <div>
            <select value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="en">En</option>
                <option value="it">It</option>
                <option value="es">Es</option>
                <option value="de">De</option>
            </select>
            <LanguageContext.Provider value={this.state.language}/>  
                        
        </div>
    );
}
}