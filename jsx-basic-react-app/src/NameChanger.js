import { useState } from "react";
const NameChanger = () => {
  const [name, setName] = useState("Danny");

  return (
    <div>
      <h1>NameChanger</h1>
      <h2>Hello! {name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default NameChanger;
