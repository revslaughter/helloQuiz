import * as React from "react";
import { operatorChoice, ALL_OPERATORS } from "./operators";
import OperatorCheckboxes from "./operatorChoice";
import NumberSetting from "./numberSetting";
import { throws } from "assert";

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
        <div className="operatorCheckboxes">
          <OperatorCheckboxes setOnChange={this.setOperators.bind(this)} />
        </div>
        <div className="numberOptions">
          <NumberSetting
            name="numberMax"
            caption="Max Number"
            updater={this.props.updateParent}
          />
          <NumberSetting
            name="numberMin"
            caption="Min Number"
            updater={this.props.updateParent}
          />
          <NumberSetting
            name="questionCount"
            caption="# Questions"
            updater={this.props.updateParent}
          />
          <NumberSetting
            name="minRight"
            caption="How many right?"
            updater={this.props.updateParent}
          />
          <NumberSetting
            name="maxWrong"
            caption="How many wrong?"
            updater={this.props.updateParent}
          />
          <NumberSetting
            name="answerAttempts"
            caption="How many attempts per question?"
            updater={this.props.updateParent}
          />
        </div>
      </div>
    );
  }
}

export default QuizSettings;

export { QuizSettings, qSetgProp, qSetgState };
