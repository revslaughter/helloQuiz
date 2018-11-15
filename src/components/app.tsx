import * as React from "react";
import QuizSettings from "./styled/styledQuizSettings";
import QuestionList from "./styled/questionArea";
import { ALL_OPERATORS, operatorChoice } from "./operators";
import { InactiveQuiz } from "./styled/styleOverrides";

interface quizState {
  isActive: boolean;
  isComplete: boolean;
  numberRight: number;
  numberWrong: number;
  numberAnswered: number;
  timeStarted: Date;
  timeFinished?: Date;
  operators?: operatorChoice[];
  numberMax?: number;
  numberMin?: number;
  questionCount?: number;
  answerAttempts?: number;
  minRight?: number;
  maxWrong?: number;
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
      timeStarted: new Date()
    };
  }

  updateSettings(chState: any) {
    this.setState(chState);
  }
  quizActivate() {
    let unThing = !this.state.isActive;
    this.setState({ isActive: unThing });
  }

  render() {
    let activeQuizQs = this.state.isActive ? (
      <QuestionList
        numberOfQuestions={this.state.questionCount}
        maxNo={this.state.numberMax}
        minNo={this.state.numberMin}
        possibleOperators={this.state.operators}
      />
    ) : (
      <InactiveQuiz>{"Save quiz settings to start!"}</InactiveQuiz>
    );
    return (
      <div className={this.props.className}>
        <QuizSettings
          initProps={INIT_PROPS}
          updateParent={this.updateSettings.bind(this)}
          updateQuizActive={this.quizActivate.bind(this)}
        />
        {activeQuizQs}
      </div>
    );
  }
}
