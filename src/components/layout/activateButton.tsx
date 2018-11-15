import * as React from "react";

function StartQuiz(props: {
  isActive: boolean;
  saveAction: () => void;
}): JSX.Element {
  let btnText = props.isActive ? "Make a new Quiz!" : "Start the Quiz!";

  return (
    <div>
      <button
        onClick={() => {
          props.saveAction();
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default StartQuiz;
