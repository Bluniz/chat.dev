import { UseAuth } from "contexts/auth/hook";
import { createContext, useState, useEffect, useCallback } from "react";
import { database } from "services/firebase";
import { getUser } from "services/users";
import { toastController } from "components/toast";

export const ChatsContext = createContext({});

export const ChatContextProvider = ({ children }) => {
  const { user } = UseAuth();

  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    setLoading(true);
    const { getDatabase, ref, onValue } = database;
    const db = getDatabase();

    const chatsRef = ref(db, `chats`);

    const unsubscribe = onValue(chatsRef, (snapshot) => {
      if (snapshot.exists()) {
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
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const _verifyUsersChats = useCallback(async (userId1, userId2) => {
    const { getDatabase, ref, get, child } = database;
    const dbRef = ref(getDatabase());
    let alreadyExists = false;

    const snapshot = await get(child(dbRef, "chats"));

    if (snapshot.exists()) {
      const data = snapshot.val();
      const keys = Object.keys(data);

      keys.forEach((key) => {
        if (
          data[key].ids.includes(userId1) &&
          data[key].ids.includes(userId2)
        ) {
          alreadyExists = true;
        }
      });
    }

    return alreadyExists;
  }, []);

  const handleCreateChat = useCallback(
    async (userId, userMessage) => {
      try {
        const db = database.getDatabase();

        const otherUser = await getUser(db, userId);

        const chatIsExists = await _verifyUsersChats(user.id, otherUser.id);

        if (!chatIsExists) {
          const key = Math.floor(Math.random() * 256);
          await database.set(database.ref(db, `chats/${key}`), {
            id: key,
            ids: [user.id, otherUser.id],
            user1: user,
            user2: {
              ...otherUser.owner,
            },
            messages: [
              {
                author: user,
                content: userMessage,
              },
            ],
          });
          toastController.success("Conversa criada com sucesso!");
        } else {
          toastController.error(
            "Chat com usuário já existe ou você tentou criar um chat consigo mesmo :x!"
          );
        }
      } catch (error) {
        toastController.error(error);
      }
    },
    [user, _verifyUsersChats]
  );

  const handleSetActiveChat = useCallback((id) => {
    const { getDatabase, ref, onValue } = database;
    const db = getDatabase();
    const chatsRef = ref(db, `chats/${id}`);

    onValue(chatsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setActiveChat(data);
      }
    });

    //setActiveChat(chats[index]);
  }, []);

  const handleResetActiveChat = useCallback(() => {
    setActiveChat(null);
  }, []);

  const handleAddMessage = useCallback(
    async (message) => {
      try {
        const db = database.getDatabase();

        await database.set(database.ref(db, `chats/${activeChat.id}`), {
          ...activeChat,
          messages: [
            ...activeChat.messages,
            {
              author: user,
              content: message,
            },
          ],
        });
      } catch (error) {
        console.log("deu ruim");

        console.log(error);
      }
    },
    [user, activeChat]
  );

  return (
    <ChatsContext.Provider
      value={{
        chats,
        loading,
        activeChat,
        handleCreateChat,
        handleSetActiveChat,
        handleResetActiveChat,
        handleAddMessage,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};
