import styled from "styled-components";
import qListTheme from "../themes/questionList";
import QuestionList from "../layout/questionList";

const StylinQlist = styled(QuestionList)`
  font-size: ${qListTheme.fontSize};
  width: ${qListTheme.width};
  min-width: ${qListTheme.minWidth};
  max-width: ${qListTheme.maxWidth};
  margin: ${qListTheme.margin};
  padding-top: ${qListTheme.padding};
`;

export default StylinQlist;
