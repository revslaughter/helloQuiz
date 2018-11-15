import styled from "styled-components";
import * as themes from "../themes";

const AnswerBox = styled.input`
  font-family: inherit;
  font-size: inherit;
  margin-left: 1em;
  width: 25%;
  height: 1em;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333333;
`;

const QuestionItem = styled.li`
  padding: 1em;
`;

const QuizArea = styled.ul`
  list-style: none;
  background-color: ${themes.qListTheme.backgroundColor};
  background-blend-mode: overlay;
  border-radius: 1em;
`;

const InactiveQuiz = styled(styled.div`
  padding: 1em;
`)`
  font-family: ${themes.main.fontFamily};
  font-size: ${themes.main.fontSize};
  width: ${themes.qListTheme.width};
  min-width: ${themes.qListTheme.minWidth};
  max-width: ${themes.qListTheme.maxWidth};
  background-color: #ea547ce6;
  margin: ${themes.qListTheme.margin};
  margin-top: 2em;
  background-blend-mode: overlay;
  border-radius: 1em;
`;

export { AnswerBox, QuestionItem, QuizArea, InactiveQuiz };
