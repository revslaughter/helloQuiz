import * as React from "react";
import styled from "styled-components";

let correctOrNot = (props: { className?: string; isCorrect: boolean }) => {
  if (props.isCorrect) {
    return <span className={props.className}>Correct :)</span>;
  } else {
    return <span className={props.className}>Incorrect :(</span>;
  }
};

const CorrectIndicator = styled(correctOrNot)`
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-variant: petite-caps;
  background-color: ${props => {
    return props.isCorrect ? "#90EE90" : "pink";
  }};
  margin-left: 5px;
`;

export default CorrectIndicator;
