import { useState } from "react";

function NameChanger() {
    const [name, setName] = useState("Londyn Amir");

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>{name}</h1>
        </div>
    )
}

export default NameChanger