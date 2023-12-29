import React from 'react';
import { useState } from 'react';

function NameChanger() {
    const [name, setName] = useState('John');

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setName('Jane')}>Change Name</button>
        </div>
    )
}

export default NameChanger