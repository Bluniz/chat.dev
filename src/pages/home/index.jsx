import MessageIcon from "assets/message.svg";
import {
  Container,
  CommentButton,
  Main,
  ChatContainer,
  MainChatContainer,
} from "./styles";
import { Modal } from "components/Modal";
import { useModal } from "hooks/useModal";
import { CreateChat } from "components/createChat";
import { Image } from "components/image";
import { Header } from "components/header";
import { ChatList } from "components/chatList";
import { useChats } from "contexts/chats/hook";
import { ReactComponent as BeginChatImg } from "assets/begin-chat.svg";
import { ActiveChat } from "components/activeChat";

export function Home() {
  const { isOpen, onOpen, onClose } = useModal();
  const { activeChat } = useChats();

  //TODO CRIAR COMPONENTE DA MAIN

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.01 }}
    >
      <Header />
      <Main>
        <ChatList />
        <ChatContainer>
          {activeChat ? (
            <ActiveChat />
          ) : (
            <MainChatContainer>
              <BeginChatImg />
              <span>
                Comece a conversar com alguém clicando no chat a esqueda ou
                adicionando no botão a direita
              </span>
            </MainChatContainer>
          )}
        </ChatContainer>
      </Main>
      <CommentButton onClick={onOpen}>
        <Image src={MessageIcon} alt="messages" />
      </CommentButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <CreateChat onClose={onClose} />
      </Modal>
    </Container>
  );
}
