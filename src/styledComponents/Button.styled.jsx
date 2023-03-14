import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border: 2px solid skyblue;
  border-radius: 1rem;

  &:active {
    background-color: lightblue;
    & > span {
      color: white;
    }
  }
`;

const StyledButtonJSX = styled(Button)`
  width: 100px;
  height: 50px;
  background-color: tomato;
  border-radius: 1rem;
  border: 2px solid black;
`;
export { StyledButton, StyledButtonJSX };
