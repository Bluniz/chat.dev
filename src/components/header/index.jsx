import MessageIcon from "assets/message.svg";
import { Image } from "components/image";
import { UserCode } from "components/UserCode";
import { UseAuth } from "contexts/auth/hook";
import {
  Header as StyledHeader,
  ProfileContainer,
  TitleContainer,
} from "./styles";

export const Header = () => {
  const { user } = UseAuth();

  return (
    <StyledHeader>
      <TitleContainer>
        <Image src={MessageIcon} alt="messages" />
        <h1>Mensagens</h1>
      </TitleContainer>

      <ProfileContainer>
        <UserCode code={user?.id} />
        <Image src={user?.avatar} alt="userphoto" />
      </ProfileContainer>
    </StyledHeader>
  );
};
