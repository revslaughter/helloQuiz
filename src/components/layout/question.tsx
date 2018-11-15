import * as React from "react";
import CorrectOrNot from "./correctOrNot";
import { AnswerBox } from "../styled/styleOverrides";
import { operatorChoice } from "../operators";

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

const QLayout = (props: qProps) => (
  <span className={props.className}>
    {props.firstNo}
    {props.op.operChar}
    {props.secondNo}
    &nbsp; =
  </span>
);

class MathQuestion extends React.Component<qProps, qState> {
  constructor(props: qProps) {
    super(props);
    this.state = {};
    this.handleInput.bind(this);
  }

  handleInput(event: React.FocusEvent<HTMLInputElement>): void {
    let val = event.currentTarget.value;
    if (val) {
      let numVal = parseInt(val);
      const userAnswer = numVal;
      const userIsCorrect = numVal == this.props.answer;
      this.setState({
        userInput: userAnswer,
        right: userIsCorrect
      });
    } else if (
      (val == null || val === undefined || val === "") &&
      this.state.right !== undefined
    ) {
      this.setState({
        userInput: undefined,
        right: undefined
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
        <AnswerBox type="number" onBlur={e => this.handleInput(e)} />
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

export default MathQuestion;
