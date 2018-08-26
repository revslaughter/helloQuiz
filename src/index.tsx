import * as React from "react";
import * as ReactDOM from "react-dom";
import { QuestionList } from "./components";

ReactDOM.render(
  <QuestionList numberOfQuestions={10} maxNo={12} />,
  document.getElementById("root")
);
