import * as React from "react";
import { operatorChoice, ALL_OPERATORS } from "./operators";
import OperatorCheckboxes from "./operatorChoice";

interface qSetgProp {
  initProps: {
    operators: operatorChoice[];
    numberMax: number;
    numberMin: number;
    questionCount: number;
    answerAttempts: number;
    minRight: number;
    maxWrong: number;
  };
  updateParent: (childState: any) => void;
  className?: string;
}

interface qSetgState {
  operators?: operatorChoice[];
  numberMax?: number;
  numberMin?: number;
  questionCount?: number;
  answerAttempts?: number;
  minRight?: number;
  maxWrong?: number;
}

class QuizSettings extends React.Component<qSetgProp, qSetgState> {
  private myOps_: operatorChoice[];

  constructor(props: qSetgProp) {
    super(props);
    this.myOps_ = this.props.initProps.operators;
  }

  setOperators(selectEvent: React.ChangeEvent<HTMLInputElement>): void {
    const selected = selectEvent.target;
    const isChecked = selected.checked;
    const operChar = selected.value;
    let operator = ALL_OPERATORS.SymbolAccess[operChar];

    if (isChecked) {
      this.myOps_ = [...this.myOps_, operator];
    } else {
      this.myOps_ = this.myOps_.filter(op => op.operChar != operChar);
    }

    this.props.updateParent({
      operators: this.myOps_
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <OperatorCheckboxes setOnChange={this.setOperators.bind(this)} />
        <label htmlFor="numMax">Max number</label>
        <input
          type="number"
          id="numMax"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.updateParent({
              numberMax: parseInt(e.target.value)
            });
          }}
        />
        <label htmlFor="numMin">Min Number</label>
        <input
          type="number"
          id="numMin"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.updateParent({
              numberMin: parseInt(e.target.value)
            });
          }}
        />
        <label htmlFor="questCount"># Questions</label>
        <input
          type="number"
          id="questCount"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.updateParent({
              questionCount: parseInt(e.target.value)
            });
          }}
        />
        <label htmlFor="minRight">How many right?</label>
        <input
          type="number"
          id="minRight"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.updateParent({
              minRight: parseInt(e.target.value)
            });
          }}
        />
        <label htmlFor="maxWrong">How many wrong?</label>
        <input
          type="number"
          id="maxWrong"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.updateParent({
              maxWrong: parseInt(e.target.value)
            });
          }}
        />
        <label htmlFor="maxAttempts">How many attempts per question?</label>
        <input
          type="number"
          id="maxAttempts"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.props.updateParent({
              answerAttempts: parseInt(e.target.value)
            });
          }}
        />
      </div>
    );
  }
}

export default QuizSettings;

export { QuizSettings, qSetgProp, qSetgState };
