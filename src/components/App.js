import React from "react";
import FilteredList from "./FilteredList";

export default function App() {  
  const peopleList = [
    { id: 0, name: "Monica", age: 29 },
    { id: 1, name: "Antonio", age: 33 },
    { id: 2, name: "Claudia", age: 34 },
    { id: 3, name: "Mirella", age: 61 },
    { id: 4, name: "Mariasole", age: 17 },
    { id: 5, name: "Mario", age: 55 },
    { id: 6, name: "Armando", age: 12 },
    { id: 7, name: "Michele", age: 24 },
    { id: 8, name: "Ludovica", age: 14 },
    { id: 9, name: "Carmen", age: 11 },
    { id: 10, name: "Paolo", age: 41 },
    { id: 11, name: "Giusy", age: 10 },
    { id: 12, name: "Samuel", age: 6 },
  ];

  return (
    <div>      
      <FilteredList peoples={peopleList} />
    </div>
  );
}


