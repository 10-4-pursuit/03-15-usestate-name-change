import React, { useState } from 'react';

const NameChanger = () => {
  const [name, setName] = useState('John Doe');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <div>
        <p>Current Name: {name}</p>
      </div>
    </div>
  );
};

export default NameChanger;