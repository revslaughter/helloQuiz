import * as React from "react";
import QuizSettings, { qSetgState } from "./quizSettings";
import QuestionList from "./questionList";
import { ALL_OPERATORS, operatorChoice } from "./operators";

interface quizState {
  isActive: boolean;
  isComplete: boolean;
  numberRight: number;
  numberWrong: number;
  numberAnswered: number;
  timeStarted: Date;
  timeFinished?: Date;
  operators: operatorChoice[];
  numberMax: number;
  numberMin: number;
  questionCount: number;
  answerAttempts: number;
  minRight: number;
  maxWrong: number;
}

interface quizProps {
  className?: string;
}

const INIT_PROPS = {
  operators: [ALL_OPERATORS.Multiplication],
  numberMax: 12,
  numberMin: -12,
  questionCount: 10,
  answerAttempts: 30,
  minRight: 10,
  maxWrong: 10
};

export default class HelloQuiz extends React.Component<quizProps, quizState> {
  constructor(props: quizProps) {
    super(props);
    this.state = {
      isActive: false,
      isComplete: false,
      numberRight: 0,
      numberWrong: 0,
      numberAnswered: 0,
      timeStarted: new Date(),
      operators: INIT_PROPS.operators,
      numberMax: INIT_PROPS.numberMax,
      numberMin: INIT_PROPS.numberMin,
      questionCount: INIT_PROPS.questionCount,
      answerAttempts: INIT_PROPS.answerAttempts,
      minRight: INIT_PROPS.minRight,
      maxWrong: INIT_PROPS.maxWrong
    };
  }

  updateSettings(chState: any) {
    this.setState(chState);
  }

  render() {
    return (
      <div className={this.props.className}>
        <QuizSettings
          initProps={INIT_PROPS}
          updateParent={this.updateSettings.bind(this)}
        />
        <QuestionList
          numberOfQuestions={this.state.questionCount}
          maxNo={this.state.numberMax}
          minNo={this.state.numberMin}
        />
      </div>
    );
  }
}
