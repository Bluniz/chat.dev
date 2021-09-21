import { UseAuth } from "contexts/auth/hook";
import { createContext, useState, useEffect } from "react";
import { database } from "services/firebase";

export const ChatsContext = createContext({});

export const ChatContextProvider = ({ children }) => {
  const { user } = UseAuth();

  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { getDatabase, ref, onValue } = database;
    const db = getDatabase();

    const test = ref(db, `chats`);

    onValue(test, (snapshot) => {
      const data = snapshot.val();

      const keys = Object.keys(data);

      let newChats = [];

      keys.forEach((key) => {
        if (data[key].ids.includes(user?.id)) {
          if (data[key].user1.id === user?.id) {
            newChats.push({ ...data[key], otherUserRef: "user2" });
          } else {
            newChats.push({ ...data[key], otherUserRef: "user1" });
          }
        }
      });

      setChats(newChats);
      setLoading(false);
    });
  }, [user]);

  return (
    <ChatsContext.Provider value={{ chats, loading }}>
      {children}
    </ChatsContext.Provider>
  );
};
