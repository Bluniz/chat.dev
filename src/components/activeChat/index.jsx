import { useState, useRef, useEffect } from "react";
import { UseAuth } from "../../contexts/auth/hook";
import { useChats } from "../../contexts/chats/hook";
import {
  Container,
  UserMessage,
  OtherUserMessage,
  MessageUserName,
  MessageContainer,
  CreateMessageContainer,
  SendMessageButton,
  MessageInput,
  Wrapper,
} from "./styles";
import { ReactComponent as SendImg } from "../../assets/send.svg";

export function ActiveChat() {
  const { user } = UseAuth();
  const { activeChat, handleAddMessage } = useChats();
  const containerRef = useRef();

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

  function handleChange(event) {
    setNewMessage(event.target.value);
  }

  async function handleCreateMessage(event) {
    event.preventDefault();
    if (!!newMessage) {
      await handleAddMessage(newMessage);
      setNewMessage("");

      console.log(containerRef);
    }
  }

  return (
    <Container>
      <Wrapper ref={containerRef}>
        <MessageContainer>
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
        </MessageContainer>
      </Wrapper>

      <CreateMessageContainer onSubmit={handleCreateMessage}>
        <MessageInput type="text" onChange={handleChange} value={newMessage} />

        <SendMessageButton type="submit">
          <SendImg />
        </SendMessageButton>
      </CreateMessageContainer>
    </Container>
  );
}
