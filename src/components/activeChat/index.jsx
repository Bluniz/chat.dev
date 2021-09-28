import { UseAuth } from "contexts/auth/hook";
import { useChats } from "contexts/chats/hook";
import {
  Container,
  UserMessage,
  OtherUserMessage,
  MessageUserName,
} from "./styles";
export function ActiveChat() {
  const { user } = UseAuth();
  const { activeChat } = useChats();

  console.log(user);

  return (
    <Container>
      {activeChat.messages.map((message, index) => {
        return message.author.name === user.name ? (
          <UserMessage key={index}>
            <MessageUserName>{message.author.name}</MessageUserName>
            <span>{message.content}</span>
          </UserMessage>
        ) : (
          <OtherUserMessage key={index}>
            <MessageUserName>{message.author.name}</MessageUserName>
            <span>{message.content}</span>
          </OtherUserMessage>
        );
      })}
    </Container>
  );
}
