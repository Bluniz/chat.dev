import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  background: ${({ theme }) => theme.colors.background.default}

  
}

::-webkit-scrollbar{
  width: 0.6rem;
  height: 0.6rem;
}
::-webkit-scrollbar-thumb{
  background: ${({ theme }) => theme.colors.yellow[400]};
  border-radius: 0.8rem;
}
::-webkit-scrollbar-thumb:hover{
  background: ${({ theme }) => theme.colors.background.secondary}
}


button {
  cursor: pointer;
}







`;
