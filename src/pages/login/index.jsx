import { UseAuth } from "../../contexts/auth/hook";
import { Container } from "./styles";
import { Illustration } from "./components/illustration";
import { Main } from "./components/main";

export function Login() {
  const { logInWithGoogle } = UseAuth();

  const handleLogIn = async () => {
    await logInWithGoogle();
  };

  return (
    <Container>
      <Illustration />
      <Main handleLogIn={handleLogIn} />
    </Container>
  );
}
