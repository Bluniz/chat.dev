import { PrincipalContainer, Button } from "../styles";
import GoogleIcon from "../../../assets/google.svg";

export const Main = ({ handleLogIn }) => {
  return (
    <PrincipalContainer>
      <div className="container">
        <strong>Login</strong>
        <span>Entre com sua conta para continuar.</span>
        <br />
        <Button onClick={handleLogIn}>
          <img src={GoogleIcon} alt="google" />
          Entrar com o google
        </Button>
      </div>
    </PrincipalContainer>
  );
};
