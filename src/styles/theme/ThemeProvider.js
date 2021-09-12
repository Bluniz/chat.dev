import { ThemeProvider as StyledProvider } from "styled-components";
import { darkTheme } from "./dark";

export function ThemeProvider({ theme = darkTheme, children }) {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
}
