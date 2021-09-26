import { UseAuth } from "contexts/auth/hook";
import { Container } from "./styles";
import { Illustration } from "./components/illustration";
import { Main } from "./components/main";

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
      <Illustration />
      <Main handleLogIn={handleLogIn} />
    </Container>
  );
}
