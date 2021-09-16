import { Wrapper, MessageContainer } from "./styles.js";

export function UserBox({ avatar, name, lastMessage }) {
  return (
    <Wrapper>
      <img src={avatar} alt="profile-IMG" />
      <MessageContainer>
        <strong>{name}</strong>
        <span>{lastMessage}</span>
      </MessageContainer>
    </Wrapper>
  );
}
