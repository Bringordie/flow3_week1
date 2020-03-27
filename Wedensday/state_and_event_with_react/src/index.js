import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";

//Create a new file App2.js (and App3.js ....)
//In index.js, delete EVERYTHING BELOW the import of App and use the strategy below to switch between the smaller exercises
//NOTE: THIS IS NOT THE WAY TO DO THINGS AFTER THE FIRST 2-3 DAYS

let app = <App4 />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app4">
        Count
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app5">
        Time
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app6">
        Fetch jokes
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  // eslint-disable-next-line
  switch (id) {
    case "app4":
      app = <App4 />;
      break;
    case "app5":
      app = <App5 />;
      break;
    case "app6":
      app = <App6 />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById("root")
//);
