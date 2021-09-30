import { ThemeProvider as StyledProvider } from "styled-components";
import { theme } from "styles/themes/theme";

export default function ThemeProvider({ providerTheme = theme, children }) {
  const newTheme = {
    ...theme,
    ...providerTheme,
  };

  return <StyledProvider theme={newTheme}>{children}</StyledProvider>;
}
