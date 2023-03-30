import styled from "styled-components";
import HookForm from "./HookForm";

export default styled(HookForm)`
  width: 25rem;
  height: fit-content;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 1rem;
  color: white;

  & label {
    margin-inline-end: 0.5rem;
    display: block;
  }

  & input{
    display: block;
    width: 100%;
    color: black;
    padding: 0.3rem;
    border-radius: 0.4rem;
    border: none;
    outline-color: #48b9e6;
    margin-block-end: .7rem;
  }
  & input[type=submit]{
    width: fit-content;
    padding: .5rem;
    margin: 0;
    /* border-radius: .4rem; */

  }

`;
