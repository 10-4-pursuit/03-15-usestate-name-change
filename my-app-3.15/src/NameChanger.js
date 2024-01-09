import React, {useState} from 'react';

function NameChanger () {
    const [name, setName] = useState('student');
    return <div>
        <input 
            value={name}
            onChange={(event=>setName(event.target.value))}
            
        />
        <p>
            Your Name: {name}
        </p>
    </div>
}



export default NameChanger;