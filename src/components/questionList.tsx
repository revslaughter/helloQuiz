import * as React from "react";
import styled from "styled-components";
import MathQuestion from "./question";
import qListTheme from "./themes/questionList";
import { QuestionItem, QuizArea } from "./styleOverrides";
import { operatorChoice } from "./operators";

interface qListProps {
  className?: string;
  numberOfQuestions: number;
  maxNo: number;
  minNo?: number;
  possibleOperators: operatorChoice[];
}

function randInt(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseOneOp(operators: operatorChoice[]): operatorChoice {
  return operators.length == 1
    ? operators[0]
    : operators[Math.floor(Math.random() * operators.length)];
}

function answerForOp(x: number, y: number, op: operatorChoice): number {
  return op.operFunction(x, y);
}

function QuestionList(props: qListProps): JSX.Element {
  let minno: number =
    props.minNo === null || props.minNo === undefined ? 0 : props.minNo;

  let counterGuy = [];
  // I promise I tried to do this in a dumb js-fancy way using
  // spread operators, anonymous functions, and mappings first
  // for the hardest-to-read experience possible.
  for (var ix = 0; ix < props.numberOfQuestions; ix++) {
    let firstNo = randInt(props.maxNo, minno);
    let secondNo = randInt(props.maxNo, minno);
    let operator = chooseOneOp(props.possibleOperators);
    let answer = answerForOp(firstNo, secondNo, operator);
    counterGuy.push(
      <QuestionItem>
        <MathQuestion
          firstNo={firstNo}
          secondNo={secondNo}
          op={operator}
          answer={answer}
        />
      </QuestionItem>
    );
  }

  return (
    <div className={props.className}>
      <QuizArea>{counterGuy}</QuizArea>
    </div>
  );
}

const StylinQlist = styled(QuestionList)`
  font-size: ${qListTheme.fontSize};
  width: ${qListTheme.width};
  min-width: ${qListTheme.minWidth};
  max-width: ${qListTheme.maxWidth};
  margin: ${qListTheme.margin};
  padding-top: ${qListTheme.padding};
`;

export default StylinQlist;
