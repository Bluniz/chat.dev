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
import { UserBox } from "./components/userBox";
import { Modal } from "components/Modal";
import { useModal } from "hooks/useModal";
// import { useEffect } from "react";
// import { database } from "services/firebase";

const fakeData = [
  {
    name: "Fulano 1",
    id: "dsa222dsadsdsa",
    avatar:
      "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg",
    messages: [
      {
        content: "fulano fez isso",
        author: {
          name: "hiririr",
          avatar:
            "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg",
          id: "hauewhaeuhea",
        },
      },
    ],
  },
  {
    name: "Fulano 1",
    id: "dsadsadsdsdsdsadsasdaa",
    avatar:
      "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg",
    messages: [
      {
        content: "fulano fez isso",
        author: {
          name: "hiririr",
          avatar:
            "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg",
          id: "hauewhaeuhea",
        },
      },
    ],
  },
  {
    name: "Fulano 1",
    id: "dsadsadsdsa",
    avatar:
      "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg",
    messages: [
      {
        content: "fulano fez isso",
        author: {
          name: "hiririr",
          avatar:
            "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg",
          id: "hauewhaeuhea",
        },
      },
    ],
  },
];

export function Home() {
  const { user } = UseAuth();

  const { isOpen, onOpen, onClose } = useModal();

  // useEffect(() => {
  //   const { getDatabase, ref, onValue } = database;
  //   const db = getDatabase();

  //   const test = ref(db, `workspace/${user.id}/chats`);

  //   onValue(test, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);
  //   });
  // }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.01 }}
    >
      <Header>
        <TitleContainer>
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
          {fakeData.map((data) => {
            return (
              <UserBox
                name={data.name}
                avatar={data.avatar}
                lastMessage={data.messages[data.messages.length - 1].content}
                key={data.id}
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
        Oi
      </Modal>
    </Container>
  );
}
