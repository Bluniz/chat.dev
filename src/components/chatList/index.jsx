import { Spinner } from "components/spinner";
import { UserBox } from "components/userBox";
import { useChats } from "contexts/chats/hook";
import {
  MessagesContainer,
  LoaderContainer,
  CreateChatContainer,
  Wrapper,
  CommentButton,
} from "./styles";
import { ReactComponent as MessageIcon } from "assets/message.svg";

export const ChatList = ({ onOpenCreateChatModal }) => {
  const { chats, loading, handleSetActiveChat, activeChat } = useChats();

  return (
    <Wrapper>
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
                  onClick={() => handleSetActiveChat(chat.id)}
                  active={chat?.id === activeChat?.id}
                />
              );
            })}
          </>
        )}
      </MessagesContainer>
      <CreateChatContainer>
        <CommentButton onClick={onOpenCreateChatModal}>
          <MessageIcon />
          <span>Novo chat</span>
        </CommentButton>
      </CreateChatContainer>
    </Wrapper>
  );
};
