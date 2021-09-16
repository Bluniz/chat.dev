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
import { useEffect, useState } from "react";
import { database } from "services/firebase";

export function Home() {
  const { user /* , logOut */ } = UseAuth();

  const [chats, setChats] = useState([]);
  const { isOpen, onOpen, onClose } = useModal();

  useEffect(() => {
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
    });
  }, [user]);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.01 }}
    >
      <Header>
        <TitleContainer /* onClick={logOut} */>
          <img src={MessageIcon} alt="messages" />
          <h1>Mensagens</h1>
        </TitleContainer>

        <ProfileContainer>
          <UserCode code={user?.id} />
          <img
            src={user?.avatar}
            alt="userphoto"
            onError={(event) => {
              event.target.src =
                "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg";
              event.onerror = null;
            }}
          />
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
        <img src={MessageIcon} alt="messages" />
      </CommentButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        {/* FAZER COMPONENT DE ADICIONAR DNOVO. */}
      </Modal>
    </Container>
  );
}
