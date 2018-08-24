import * as React from "react";
import * as ReactDOM from "react-dom";
import isCorrect from "./correctOrNot";
import CorrectOrNot from "./correctOrNot";

class question extends React.Component<
  { firstNo: number; secondNo: number },
  {
    answer: number;
    right?: boolean;
    arguments: { first: number; second: number };
    userInput?: number;
  }
> {
  constructor(props: { firstNo: number; secondNo: number }) {
    super(props);
    this.state = {
      arguments: { first: props.firstNo, second: props.secondNo },
      answer: props.firstNo * props.secondNo
    };
    this.handleInput.bind(this);
  }

  handleInput(event: React.FormEvent<HTMLInputElement>): void {
    const userAnswer = parseInt(event.currentTarget.value);
    const userIsCorrect =
      parseInt(event.currentTarget.value) == this.state.answer;
    this.setState({
      userInput: userAnswer,
      right: userIsCorrect
    });
  }

  public render() {
    if (this.state.right !== undefined) {
      return (
        <div>
          {this.state.arguments.first} &times; {this.state.arguments.second}
          <input type="number" onChange={e => this.handleInput(e)} />
          <CorrectOrNot isCorrect={this.state.right} />
        </div>
      );
    } else {
      return (
        <div>
          {this.state.arguments.first} &times; {this.state.arguments.second}
          <input type="number" onChange={e => this.handleInput(e)} />
        </div>
      );
    }
  }
}

export default question;
