import MessageIcon from "assets/message.svg";
import { Container, CommentButton, Main, ChatContainer } from "./styles";
import { Modal } from "components/Modal";
import { useModal } from "hooks/useModal";
import { CreateChat } from "components/createChat";
import { Image } from "components/image";
import { Header } from "components/header";
import { ChatList } from "components/chatList";

export function Home() {
  const { isOpen, onOpen, onClose } = useModal();

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
        <ChatContainer>ata</ChatContainer>
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
