import React, {useState} from 'react'

function NameChanger() {
    const [name, setName] = useState("claire")
    const inputValue = (event) => {
        setName(event.target.value)
    }
  return (
    <div>
        <input 
        type="text" 
        id="name" 
        placeholder="Enter text here" 
        onChange={inputValue}
        />
        <p>The current name is: {name}</p>

    </div>
  )
}

export default NameChanger