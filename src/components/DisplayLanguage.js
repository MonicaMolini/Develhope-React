import React from "react";
import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

export default function DisplayLanguage() {
    const language = useContext(LanguageContext);
  
    return <h3>Lang: {language}</h3>;
  }