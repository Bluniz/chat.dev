import { Spinner } from "components/spinner";
import { UserBox } from "components/UserBox";
import { useChats } from "contexts/chats/hook";
import { MessagesContainer, LoaderContainer } from "./styles";

export const ChatList = () => {
  const { chats, loading } = useChats();

  return (
    <MessagesContainer>
      {loading ? (
        <LoaderContainer>
          <Spinner isActive={loading} />
        </LoaderContainer>
      ) : (
        <>
          {chats.map((chat, index) => {
            const otherUser = chat[chat.otherUserRef];
            const messagesSize = chat.messages.length - 1;

            return (
              <UserBox
                key={index}
                avatar={otherUser.avatar}
                name={otherUser.name}
                lastMessage={chat.messages[messagesSize].content}
              />
            );
          })}{" "}
        </>
      )}
    </MessagesContainer>
  );
};
