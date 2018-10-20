import * as React from "react";
import styled from "styled-components";
import MathQuestion from "./question";
import qListTheme from "./themes/questionList";
import { QuestionItem, QuizArea } from "./styleOverrides";

interface qListProps {
  className?: string;
  numberOfQuestions: number;
  maxNo: number;
  minNo?: number;
}

function randInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function QuestionList(props: qListProps): JSX.Element {
  let counterGuy = [];

  // I promise I tried to do this in a dumb js-fancy way using
  // spread operators, anonymous functions, and mappings first
  // for the hardest-to-read experience possible.
  for (var ix = 0; ix < props.numberOfQuestions; ix++) {
    counterGuy.push(
      <QuestionItem key={ix}>
        <MathQuestion
          firstNo={randInt(props.maxNo)}
          secondNo={randInt(props.maxNo)}
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
