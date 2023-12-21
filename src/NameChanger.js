import React from 'react';

function NameChanger() {
    const [name , setName] = React.useState('Tigger');
    const handleNameInput = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <input type="text" value={name} onChange={handleNameInput} />
            <h1>Hello {name}!</h1>
        </div>
    );
}

export default NameChanger;