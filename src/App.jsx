import { Routes } from "./routes/routes";
import { AppContextProvider } from "./contexts/appProvider";
import { GlobalStyles } from "styles/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, darkTheme } from "styles/themes";
import { ToastContainer } from "components/toast";
import "services/firebase";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider providerTheme={darkTheme}>
        <AppContextProvider>
          <GlobalStyles />
          <Routes />
        </AppContextProvider>
      </ThemeProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
