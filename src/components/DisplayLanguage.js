import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {(languageChoice) => {
                    return (
                    <div>
                        <h1>{languageChoice}</h1>
                        </div>
                        )
                }}
            </LanguageContext.Consumer>
        );
    }
}