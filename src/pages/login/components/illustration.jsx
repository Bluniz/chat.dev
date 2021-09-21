import { IllustrationContainer } from "./styles";
import ChatImg from "assets/chat.svg";

export const Illustration = () => {
  return (
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
  );
};
