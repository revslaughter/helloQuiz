import styled from "styled-components";
import * as themes from "../themes";
import QuizSettings from "../layout/quizSettings";

export default styled(QuizSettings)`
  font-family: ${themes.main.fontFamily};
  font-size: ${themes.quizSettings.fontSize};
  background-color: ${themes.quizSettings.backgroundColor};
  .operatorCheckboxes {
  }
  .numberOptions {
  }
`;
