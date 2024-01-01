import React, {useState} from 'react';

function NameChanger () {
    const [name, setName] = React.useState('Kyron');
    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Your name: {name}</p>
        </div>
    );
}

export default NameChanger;