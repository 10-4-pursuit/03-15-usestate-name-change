import React from 'react';

function NameChanger() {
    const [name, setName] = React.useState('Jane Doe');

    const nameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <h1>Name Changer</h1>
            <input type="text" value={name} onChange={nameChange} placeholder="Enter a new name" />
            <p>Current Name: {name}</p>
        </div>
    )
}

export default NameChanger;