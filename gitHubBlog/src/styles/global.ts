import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
body,input,textarea,button{
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  border: 0;
  &:focus{
    outline: 0;
    border: 1px solid ${props=>props.theme.blue};
  }
}

`