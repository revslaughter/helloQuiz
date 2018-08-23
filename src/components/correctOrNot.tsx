import * as React from "react";
import * as ReactDOM from "react-dom";

let correctOrNot = (props: { isCorrect: boolean }) => {
  if (props.isCorrect) {
    return <div>Correct :)</div>;
  } else {
    return <div>Incorrect :(</div>;
  }
};

export default correctOrNot;
