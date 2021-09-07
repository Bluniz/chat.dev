import { combineContexts } from "utils";
import { AuthContextProvider } from "./auth/provider";
const providers = [AuthContextProvider];
export const AppContextProvider = combineContexts(...providers);
