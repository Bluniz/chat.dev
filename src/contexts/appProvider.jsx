import { combineContexts } from "../utils";
import { AuthContextProvider } from "./auth/provider";
import { ChatContextProvider } from "./chats/provider";
const providers = [AuthContextProvider, ChatContextProvider];
export const AppContextProvider = combineContexts(...providers);
