import { Image } from "../image/index.jsx";
import { Wrapper, MessageContainer } from "./styles.js";

export function UserBox({ avatar, name, lastMessage, onClick, active }) {
  return (
    <Wrapper onClick={onClick} active={active}>
      <Image src={avatar} alt="profile-IMG" />
      <MessageContainer>
        <strong>{name}</strong>
        <span>{lastMessage}</span>
      </MessageContainer>
    </Wrapper>
  );
}
