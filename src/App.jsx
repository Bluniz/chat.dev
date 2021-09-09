import { Routes } from "./routes/routes";
import "services/firebase";
import { AppContextProvider } from "contexts/appProvider";
import { GlobalStyles } from "styles/global";

function App() {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <Routes />
    </AppContextProvider>
  );
}

export default App;
