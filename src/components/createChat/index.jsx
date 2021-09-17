import { useEffect } from "react";
import { useState } from "react";
import { Container, Form } from "./styles";

export function CreateChat() {
  const [userId, setUserId] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);

  useEffect(() => {
    setHasError(false);
    setErrorMsgs([]);
  }, [userId]);

  function handleChange(event) {
    setUserId(event.target.value);
  }

  function formValidation() {
    const newErrorMsgs = [];
    console.log("oi");

    if (!userId) newErrorMsgs.push("* ID é um campo obrigatório!");
    if (userId.length < 28) newErrorMsgs.push("* ID inválido!");

    return newErrorMsgs.length > 0 ? newErrorMsgs : false;
  }

  function onSubmit(event) {
    event.preventDefault();

    const errors = formValidation();

    if (errors) {
      setHasError(true);
      setErrorMsgs(errors);
      return;
    }

    console.log(userId);
  }

  return (
    <Container>
      <h1>Iniciar conversa</h1>
      <Form onSubmit={onSubmit} error={hasError}>
        <label htmlFor="user-id">Digite o ID do usuário</label>
        <input
          type="text"
          name="user-id"
          id="user-id"
          onChange={handleChange}
          value={userId}
        />
        <button type="submit">Criar</button>
        {hasError && (
          <>
            {errorMsgs.map((msg, index) => (
              <span className="error" key={index}>
                {msg}{" "}
              </span>
            ))}
          </>
        )}
      </Form>
    </Container>
  );
}
