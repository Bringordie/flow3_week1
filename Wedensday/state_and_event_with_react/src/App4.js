import React, { useState, useCallback } from "react";
import "./App.css";

export default function App4() {
  const [count, setCount] = useState(0);

  const setTheCounttoVal = useCallback(
    value => {
      setCount(value);
    },
    [count]
  );

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>
        Click me to decrease count
      </button>
      <input
        value={count}
        onChange={e => setTheCounttoVal(e.target.value)}
      ></input>
    </div>
  );
}
