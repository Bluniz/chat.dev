import { PrincipalContainer, Button } from "./styles";
import GoogleIcon from "assets/google.svg";

export const Main = ({ handleLogIn }) => {
  return (
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
  );
};
