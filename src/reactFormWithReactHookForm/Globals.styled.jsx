import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body{
    padding: 0;
    margin:0;
    background-color: #242424;
}
#root{
    width:100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    box-sizing: border-box;
}
`;
