import { Routes } from "./routes/routes";
import "services/firebase";
import { AppContextProvider } from "contexts/appProvider";
import { GlobalStyles } from "styles/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, darkTheme } from "styles/themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider providerTheme={darkTheme}>
        <AppContextProvider>
          <GlobalStyles />
          <Routes />
        </AppContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
