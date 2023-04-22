import React, { useEffect, useRef } from "react";

export default function CarDetails({ cardetails }) {
  const formRef = useRef(cardetails);

  useEffect(() => {
    const [model, year, color] = formRef.current;
    model.value = cardetails.model;
    year.value = cardetails.year;
    color.value = cardetails.color;
  }, [cardetails]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const [model, year, color] = formRef.current;    
  };

  return (
    <form style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} ref={formRef} onSubmit={handleSubmit}>
      <label>Model:</label>
      <input type="text" id="model" name="model" placeholder="model" />

      <label>Year:</label>
      <input type="text" id="year" name="year" placeholder="year" />

      <label>Color:</label>
      <input type="text" id="color" name="color" placeholder="color" />

      <button type="submit">Insert</button>
    </form>
  );
}