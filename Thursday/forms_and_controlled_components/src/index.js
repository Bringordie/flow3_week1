import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FormDemo from "./FormDemo";
import FormDemoMultiple from "./FormDemoMultiple";

//Create a new file App2.js (and App3.js ....)
//In index.js, delete EVERYTHING BELOW the import of App and use the strategy below to switch between the smaller exercises
//NOTE: THIS IS NOT THE WAY TO DO THINGS AFTER THE FIRST 2-3 DAYS

let app = <FormDemo />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        ex1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        ex2
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
    case "app1":
      app = <FormDemo />;
      break;
    case "app2":
      app = <FormDemoMultiple />;
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
