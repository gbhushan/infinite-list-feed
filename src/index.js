import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ListComponent from "./Components/";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        <li>
          <ListComponent data={"test"} />
        </li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
