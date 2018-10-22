import styled from "styled-components";
import * as themes from "../themes";
import QuizSettings from "../layout/quizSettings";

export default styled(QuizSettings)`
  font-family: ${themes.main.fontFamily};
  min-width: ${themes.main.minWidth};
  max-width: ${themes.main.maxWidth};
  margin: ${themes.main.margin};
  width: ${themes.main.width};
  font-size: ${themes.quizSettings.fontSize};
  background-color: ${themes.quizSettings.backgroundColor};
  padding: ${themes.quizSettings.padding};
  border-radius: ${themes.quizSettings.borderRadius};
  .operatorCheckboxes {
    border: none;
  }
  .numberOptions {
    font-size: 14px;
    text-align: right;
    padding-right: 3em;
  }
  input.numberSetting {
    width: 3em;
  }
  label.numberSetting {
    margin-right: 1em;
  }
`;
