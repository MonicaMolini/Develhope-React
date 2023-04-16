import React from "react";

import { useState } from "react";


export function ClickCounter(){
    
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count + 1)
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleCount}>Increment</button>
        </div>
    );   
}
