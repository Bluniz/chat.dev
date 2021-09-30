import { useState } from "react";
import { Image } from "../image";
import { Menu } from "../menu";
import { UserCode } from "../userCode";
import { UseAuth } from "../../contexts/auth/hook";
import {
  Header as StyledHeader,
  ProfileContainer,
  TitleContainer,
} from "./styles";
import { ReactComponent as MessageIcon } from "../../assets/message.svg";
import { useChats } from "../../contexts/chats/hook";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = UseAuth();
  const { handleResetActiveChat } = useChats();

  function handleTogleMenu() {
    setOpenMenu((state) => !state);
  }

  return (
    <StyledHeader>
      <TitleContainer onClick={handleResetActiveChat}>
        <MessageIcon />
        <h1>Mensagens</h1>
      </TitleContainer>

      <ProfileContainer>
        <UserCode code={user?.id} />
        {openMenu && <Menu />}
        <Image src={user?.avatar} alt="userphoto" onClick={handleTogleMenu} />
      </ProfileContainer>
    </StyledHeader>
  );
};
