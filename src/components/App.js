import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export default class App extends Component {
  state = {
    language: "En",
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
                <option value="En">En</option>
                <option value="It">It</option>
                <option value="Es">Es</option>
                <option value="De">De</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>  
            <DisplayLanguage />
            </LanguageContext.Provider>
                        
        </div>
    );
}
}