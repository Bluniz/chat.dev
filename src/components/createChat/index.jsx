import { useChats } from "../../contexts/chats/hook";
import { useState } from "react";
import { Container, Form, Input } from "./styles";

export function CreateChat({ onClose }) {
  const [userId, setUserId] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [hasError, setHasError] = useState({
    userId: false,
    userMessage: false,
  });
  const [errorMsgs, setErrorMsgs] = useState([]);

  const { handleCreateChat } = useChats();

  function filterErrorMessage(field) {
    if (errorMsgs.length > 0) {
      const filteredErrors = errorMsgs.filter((item) => item.field !== field);
      setErrorMsgs(filteredErrors);
    }
  }

  function handleChange(event) {
    setUserId(event.target.value);
    setHasError((state) => ({ ...state, userId: false }));
    filterErrorMessage("userId");
  }

  function handleChangeUserMessage(event) {
    setUserMessage(event.target.value);
    setHasError((state) => ({ ...state, userMessage: false }));
    filterErrorMessage("userMessage");
  }

  function formValidation() {
    const newErrorMsgs = [];

    if (!userId)
      newErrorMsgs.push({
        field: "userId",
        message: "* ID é um campo obrigatório!",
      });
    if (userId.length < 28)
      newErrorMsgs.push({ field: "userId", message: "* ID inválido!" });
    if (!userMessage)
      newErrorMsgs.push({
        field: "userMessage",
        message: "* Mensagem inicial é um campo obrigatório!",
      });

    return {
      userId: newErrorMsgs.filter((item) => item.field === "userId").length > 0,
      userMessage:
        newErrorMsgs.filter((item) => item.field === "userMessage").length > 0,
      errors: newErrorMsgs.length > 0 ? newErrorMsgs : false,
    };
  }

  async function onSubmit(event) {
    event.preventDefault();

    const validationData = formValidation();

    if (validationData.errors) {
      const newErrors = {
        ...hasError,
      };

      if (validationData.userId) newErrors.userId = true;
      if (validationData.userMessage) newErrors.userMessage = true;

      setHasError(newErrors);
      setErrorMsgs(validationData.errors);
      return;
    }

    await handleCreateChat(userId, userMessage);
    onClose();
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Iniciar conversa</h1>

        <label htmlFor="user-id">Digite o ID do usuário</label>
        <Input
          type="text"
          name="user-id"
          id="user-id"
          onChange={handleChange}
          value={userId}
          error={hasError.userId}
        />
        <label htmlFor="user-message">Digite sua primeira mensagem</label>

        <Input
          type="text"
          name="user-message"
          id="user-message"
          onChange={handleChangeUserMessage}
          value={userMessage}
          error={hasError.userMessage}
        />
        <button type="submit">Criar</button>
        {errorMsgs.length > 0 && (
          <>
            {errorMsgs.map((data, index) => (
              <span className="error" key={index}>
                {data.message}{" "}
              </span>
            ))}
          </>
        )}
      </Form>
    </Container>
  );
}
