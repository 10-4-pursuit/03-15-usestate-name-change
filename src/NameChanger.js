import React from'react';

import { useState } from 'react';


function NameChanger () {

        const [name, setName] = React.useState('Everyone thought John was the Assassin');
return (
<div>
<h1>{name}</h1>
<button onClick={() => setName('It was Sheila who shot the president!')}>Click here to reveal the assassin</button>
</div>
)
    
}

export default NameChanger;