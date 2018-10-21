import styled from "styled-components";
import correctOrNot from "../layout/correctOrNot";

const CorrectIndicator = styled(correctOrNot)`
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-variant: petite-caps;
  background-color: ${props => {
    return props.isCorrect ? "#90EE90" : "pink";
  }};
  margin-left: 5px;
`;

export default CorrectIndicator;
