import { Routes } from "./routes/routes";
import "services/firebase";
import { AppContextProvider } from "contexts/appProvider";

function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
