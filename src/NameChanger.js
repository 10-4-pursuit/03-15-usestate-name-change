import React, { useState, useEffect } from "react";
// if you import usestate from react directly you no longer have to list react.usestate in the code below, this destructures the function from the react object

function NameChanger() {
  const [name, setName] = useState("Carlos");
  
  useEffect(() => {
    document.title = `My favorite person is ${name}, and sometimes...`;
  }, [name]);

  const handleNameTwo = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>My favorite person is {name}, and sometimes...</h1>
      <input
        type="text"
        value={name}
        onChange={handleNameTwo}
        placeholder="Enter Name"
      />
    </div>
  );
}

export default NameChanger;
