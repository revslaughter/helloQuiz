import * as React from "react";

let CorrectOrNot = (props: { className?: string; isCorrect: boolean }) => {
  if (props.isCorrect) {
    return <span className={props.className}>Correct :)</span>;
  } else {
    return <span className={props.className}>Incorrect :(</span>;
  }
};

export default CorrectOrNot;
