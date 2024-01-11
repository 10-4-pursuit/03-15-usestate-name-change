import React, { useState } from "react";

function NameChanger() {
    const [name, setName] = React.useState("James");

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <label>
                Name input: <input type="text" value={ name } onChange={nameChangeHandler} placeholder="Enter Name Here"/> <button>Submit</button>
            </label>
            <hr />
            <h2>Current Name: { name } </h2>
        </div>
    );
};

export default NameChanger;