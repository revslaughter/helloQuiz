import styled from "styled-components";
import * as themes from "../themes";
import QuestionList from "../layout/questionList";

const StylinQlist = styled(QuestionList)`
  font-family: ${themes.main.fontFamily};
  font-size: ${themes.qListTheme.fontSize};
  width: ${themes.qListTheme.width};
  min-width: ${themes.qListTheme.minWidth};
  max-width: ${themes.qListTheme.maxWidth};
  margin: ${themes.qListTheme.margin};
  padding-top: ${themes.qListTheme.padding};
`;

export default StylinQlist;
