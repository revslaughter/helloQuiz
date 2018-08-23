import * as React from "react";
import * as ReactDOM from "react-dom";

import * as components from "./components";

function getRandomInt(max: number): string {
  return Math.floor(Math.random() * Math.floor(max)).toString();
}

ReactDOM.render(
  <div>
    <components.question
      firstNo={getRandomInt(6)}
      secondNo={getRandomInt(12)}
    />
    <components.correctOrNot isCorrect={true} />
  </div>,
  document.getElementById("root")
);
