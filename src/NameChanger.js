import React from "react";

function NameChanger() {
    const [name, setName] = React.useState('Alice');
    return (<div>
        <h1>Name Changer</h1>
        <h2>Hello, {name}!</h2>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    </div>
    );
}

export default NameChanger;