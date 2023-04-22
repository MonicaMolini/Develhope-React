import React from "react";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

import DisplayLanguage from "./DisplayLanguage";

export default function App() {
  const [language, setLanguage] = useState("en");

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}


