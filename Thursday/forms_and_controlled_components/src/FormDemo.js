import React, { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("You wrote the name: " + name);
  }

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Submit Button</button>
      </form>
      {name}
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
