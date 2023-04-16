import React from "react";
import { useState, useEffect } from "react";


export function ClickCounter({onCounterChange}){
    
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(() => count + 1)
    }

    useEffect(()=>{
        onCounterChange(count)
    },[count])

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleCount}>Increment</button>
        </div>
    );   
}
