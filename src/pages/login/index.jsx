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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <IllustrationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img src={ChatImg} alt="Illustration" />
        <h1>Chat.dev</h1>
        <span>Converse com seus amigos em tempo real.</span>
      </IllustrationContainer>
      <PrincipalContainer
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container">
          <strong>Login</strong>
          <span>Entre com sua conta para continuar.</span>
          <Button
            onClick={handleLogIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={GoogleIcon} alt="google" />
            Entrar com o google
          </Button>
          <Button
            onClick={handleLogIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={GoogleIcon} alt="google" />
            Entrar com o google
          </Button>
        </div>
      </PrincipalContainer>
    </Container>
  );
}
