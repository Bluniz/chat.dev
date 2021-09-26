import { UseAuth } from "contexts/auth/hook";
import { Container, Button } from "./styles";

export function Menu() {
  const { logOut } = UseAuth();
  return (
    <Container>
      <Button onClick={logOut}>Sair</Button>
    </Container>
  );
}
