import { useContext } from "react";
import { ChatsContext } from "./provider";

export const useChats = () => useContext(ChatsContext);
