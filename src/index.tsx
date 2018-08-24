import * as React from "react";
import * as ReactDOM from "react-dom";

import * as components from "./components";

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

ReactDOM.render(
  <div>
    <components.question
      firstNo={getRandomInt(6)}
      secondNo={getRandomInt(12)}
    />
  </div>,
  document.getElementById("root")
);
