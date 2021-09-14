import { UseAuth } from "contexts/auth/hook";
import MessageIcon from "assets/message.svg";
import { Container, Header, ProfileContainer, TitleContainer } from "./styles";
import { UserCode } from "components/UserCode";
// import { useEffect } from "react";
// import { database } from "services/firebase";

export function Home() {
  const { user } = UseAuth();

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
    </Container>
  );
}
