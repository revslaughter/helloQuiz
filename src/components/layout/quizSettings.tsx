import * as React from "react";
import { operatorChoice, ALL_OPERATORS } from "../operators";
import OperatorCheckboxes from "./operatorChoice";
import NumberSetting from "./numberSetting";
import ActivateButton from "./activateButton";

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
  updateQuizActive: () => boolean;
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
  quizActive: boolean;
}

class QuizSettings extends React.Component<qSetgProp, qSetgState> {
  private myOps_: operatorChoice[];

  constructor(props: qSetgProp) {
    super(props);
    this.myOps_ = [];
    this.state = {
      quizActive: false
    };
  }
  setQuizActive(): void {
    let unActivor = !this.state.quizActive;
    this.setState({ quizActive: unActivor });
    this.props.updateQuizActive();
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
          <OperatorCheckboxes
            setOnChange={this.setOperators.bind(this)}
            disabled={this.state.quizActive}
          />
        </div>
        <div className="numberOptions">
          <NumberSetting
            disabled={this.state.quizActive}
            name="numberMax"
            caption="Max Number"
            updater={this.props.updateParent}
          />
          <NumberSetting
            disabled={this.state.quizActive}
            name="numberMin"
            caption="Min Number"
            updater={this.props.updateParent}
          />
          <NumberSetting
            disabled={this.state.quizActive}
            name="questionCount"
            caption="# Questions"
            updater={this.props.updateParent}
          />
        </div>
        <ActivateButton
          isActive={this.state.quizActive}
          saveAction={this.setQuizActive.bind(this)}
        />
      </div>
    );
  }
}

export default QuizSettings;

export { QuizSettings, qSetgProp, qSetgState };
