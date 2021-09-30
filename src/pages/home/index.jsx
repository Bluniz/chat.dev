import { Container, Main, ChatContainer, MainChatContainer } from "./styles";
import { Modal } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { CreateChat } from "../../components/createChat";
import { Header } from "../../components/header";
import { ChatList } from "../../components/chatList";
import { useChats } from "../../contexts/chats/hook";
import { ReactComponent as BeginChatImg } from "../../assets/begin-chat.svg";
import { ActiveChat } from "../../components/activeChat";

export function Home() {
  const { isOpen, onOpen, onClose } = useModal();
  const { activeChat } = useChats();

  return (
    <Container>
      <Header />
      <Main>
        <ChatList onOpenCreateChatModal={onOpen} />
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
      {/* <CommentButton onClick={onOpen}>
        <Image src={MessageIcon} alt="messages" />
      </CommentButton> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <CreateChat onClose={onClose} />
      </Modal>
    </Container>
  );
}
