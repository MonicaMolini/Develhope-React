import React from "react";
import CarDetails from "./CarDetails";

export default function App() {      
    
      return (
        <div>
          <h1>Car details:</h1>
          <CarDetails cardetails={{ model: "Ford", year: 2003, color: "light grey" }}/>
          
        </div>
      );
    } 
