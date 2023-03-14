import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 50vh;
  /* give a default value for a variable property */
  background-color: ${({ bgColor = "red" }) => bgColor};
`;
