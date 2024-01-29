import React, { useState } from 'react';

const NameChanger = () => {
    const [name, setName] = useState("Mikal Din");
    return (
        <div> 
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}  
        />

        <p>Current Name: {name}</p>
        </div>
    );

};

export default NameChanger;