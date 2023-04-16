import React from "react";
import { ClickCounter } from "./ClickCounter";

export default function App() {
    const onCounterChange = (count) =>{
        console.log(count)
    }
    
    return (
        <div>
         <ClickCounter onCounterChange={onCounterChange} />                     
        </div>
    );
}
