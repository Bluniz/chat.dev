import { UseAuth } from "contexts/auth/hook";
import {
  Container,
  IllustrationContainer,
  PrincipalContainer,
  Button,
} from "./styles";
import GoogleIcon from "assets/google.svg";
import ChatImg from "assets/chat.svg";

export function Login() {
  const { logInWithGoogle } = UseAuth();

  const handleLogIn = async () => {
    await logInWithGoogle();
  };

  return (
    <Container>
      <IllustrationContainer>
        <img src={ChatImg} alt="Illustration" />
        <h1>Chat.dev</h1>
        <span>Converse com seus amigos em tempo real.</span>
      </IllustrationContainer>
      <PrincipalContainer>
        <span>LogIn</span>
        <Button onClick={handleLogIn}>
          <img src={GoogleIcon} alt="google" />
          Entrar com o google
        </Button>
      </PrincipalContainer>
    </Container>
  );
}
