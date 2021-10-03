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
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb{
  background: #FFD369;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover{
  background: #44475A;
}


button {
  cursor: pointer;
}







`;
