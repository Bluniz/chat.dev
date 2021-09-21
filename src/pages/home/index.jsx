import { UseAuth } from "contexts/auth/hook";
import MessageIcon from "assets/message.svg";
import {
  Container,
  Header,
  ProfileContainer,
  TitleContainer,
  MessagesContainer,
  CommentButton,
  Main,
  ChatContainer,
} from "./styles";
import { UserCode } from "components/UserCode";
import { UserBox } from "components/UserBox";
import { Modal } from "components/Modal";
import { useModal } from "hooks/useModal";
import { CreateChat } from "components/createChat";
import { Image } from "components/image";
import { useChats } from "contexts/chats/hook";

export function Home() {
  const { user /* , logOut */ } = UseAuth();
  const { chats, loading } = useChats();

  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.01 }}
    >
      <Header>
        <TitleContainer /* onClick={logOut} */>
          <Image src={MessageIcon} alt="messages" />
          <h1>Mensagens</h1>
        </TitleContainer>

        <ProfileContainer>
          <UserCode code={user?.id} />
          <Image src={user?.avatar} alt="userphoto" />
        </ProfileContainer>
      </Header>
      <Main>
        <MessagesContainer>
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
          })}
        </MessagesContainer>
        <ChatContainer>ata</ChatContainer>
      </Main>
      <CommentButton onClick={onOpen}>
        <Image src={MessageIcon} alt="messages" />
      </CommentButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <CreateChat />
      </Modal>
    </Container>
  );
}
