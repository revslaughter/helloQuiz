import * as React from "react";
import styled from "styled-components";
import * as themes from "./themes";

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
  background-color: #add8e6e6;
  background-blend-mode: overlay;
  border-radius: 1em;
  /*box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);*/
`;

const QuestionArea = styled.div``;

export { AnswerBox, QuestionItem, QuizArea };
