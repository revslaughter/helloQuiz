import * as React from "react";

function StartQuiz(props: {
  isActive: boolean;
  saveAction: () => void;
}): JSX.Element {
  let btnText = props.isActive ? "Reconfigure Quiz!" : "Save Settings!";

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
