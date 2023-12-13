import React, { useState } from "react";

function NameChanger() {
    const [name, setName] = useState("John");
    return (
        <div>
            <h1>My name is: {name}</h1>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
    )
}

export default NameChanger;

