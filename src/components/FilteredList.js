import React, { useMemo } from "react";

export default function FilteredList({ peoples }) {
  const filteredList = useMemo(() => {
    return peoples.filter((x) => x.age >= 18);
  }, [peoples]);

  return (
    <>
      <h1>Peoples:</h1>
      <ul>
        {filteredList.map((x) => (
          <li key={x.id}>{`Name: ${x.name} - Age: ${x.age}`}</li>
        ))}
      </ul>
    </>
  );
}