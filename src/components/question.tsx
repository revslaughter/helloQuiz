import * as React from "react";
import styled from "styled-components";
import CorrectOrNot from "./correctOrNot";
import { AnswerBox } from "./styleOverrides";

interface qProps {
  className?: string;
  firstNo: number;
  secondNo: number;
}

interface qState {
  answer: number;
  right?: boolean;
  arguments: { first: number; second: number };
  userInput?: number;
}

const QLayout = styled((props: qProps) => (
  <span className={props.className}>
    {props.firstNo}
    &times;
    {props.secondNo}
  </span>
))``;

class MathQuestion extends React.Component<qProps, qState> {
  constructor(props: qProps) {
    super(props);
    this.state = {
      arguments: { first: props.firstNo, second: props.secondNo },
      answer: props.firstNo * props.secondNo
    };
    this.handleInput.bind(this);
  }

  handleInput(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key == "Enter") {
      const userAnswer = parseInt(event.currentTarget.value);
      const userIsCorrect =
        parseInt(event.currentTarget.value) == this.state.answer;
      this.setState({
        userInput: userAnswer,
        right: userIsCorrect
      });
    }
  }

  public render() {
    let QuestionArea = (
      <span>
        <QLayout firstNo={this.props.firstNo} secondNo={this.props.secondNo} />
        <AnswerBox type="number" onKeyPress={e => this.handleInput(e)} />{" "}
      </span>
    );

    if (this.state.right !== undefined) {
      return (
        <span className={this.props.className}>
          {QuestionArea}
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
