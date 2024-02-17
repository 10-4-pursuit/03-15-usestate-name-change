import React,  { useState } from 'react';

function NameChanger() {
    const [name, setName] = useState('Janine');
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <label>
                Enter Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <h1>Greetings, {name}!</h1>
        </div>
    );
}

export default NameChanger;