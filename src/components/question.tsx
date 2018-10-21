import * as React from "react";
import styled from "styled-components";
import CorrectOrNot from "./correctOrNot";
import { AnswerBox } from "./styleOverrides";
import { operatorChoice } from "./operators";

interface qProps {
  className?: string;
  firstNo: number;
  secondNo: number;
  op: operatorChoice;
  answer: number;
}

interface qState {
  right?: boolean;
  userInput?: number;
}

const QLayout = styled((props: qProps) => (
  <span className={props.className}>
    {props.firstNo}
    {props.op.operChar}
    {props.secondNo}
    &nbsp; =
  </span>
))``;

class MathQuestion extends React.Component<qProps, qState> {
  constructor(props: qProps) {
    super(props);
    this.state = {};
    this.handleInput.bind(this);
  }

  handleInput(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key == "Enter") {
      const userAnswer = parseInt(event.currentTarget.value);
      const userIsCorrect =
        parseInt(event.currentTarget.value) == this.props.answer;
      this.setState({
        userInput: userAnswer,
        right: userIsCorrect
      });
    }
  }

  public render() {
    let QuestionArea = (
      <span>
        <QLayout
          firstNo={this.props.firstNo}
          secondNo={this.props.secondNo}
          op={this.props.op}
          answer={this.props.answer}
        />
        <AnswerBox type="number" onKeyPress={e => this.handleInput(e)} />{" "}
      </span>
    );

    if (this.state.right !== undefined) {
      return (
        <span className={this.props.className}>
          {QuestionArea}
          <br />
          <CorrectOrNot isCorrect={this.state.right} />
        </span>
      );
    } else {
      return <span className={this.props.className}>{QuestionArea}</span>;
    }
  }
}

const StyledMathQuestion = styled(MathQuestion)`
  font-family: Arial, Helvetica, sans-serif;
  display: inline flex;
  justify-content: space-between;
`;

export default StyledMathQuestion;
