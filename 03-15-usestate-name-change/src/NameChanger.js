

import React, { useState } from 'react';

const NameChanger = () => {
  // State to hold the current name
  const [name, setName] = useState('Alice');

  // Function to handle input change and update the name in the state
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Name Changer</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter a new name"
      />
      <p>Current Name: {name}</p>
    </div>
  );
};

export default NameChanger;
