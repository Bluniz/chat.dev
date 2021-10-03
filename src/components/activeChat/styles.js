import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const Wrapper = styled.div`
  overflow: scroll;
  min-height: 87%;
  max-height: 87%;
`;

export const CreateMessageContainer = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 13%;

    padding: 2rem;

    display: flex;
  `}
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 2rem;
  padding: 0rem 2rem;
  gap: 1rem;

  height: 90rem;
`;

export const Message = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 0 0 0.2px;

  min-width: 25rem;
  max-width: 40rem;

  background: ${({ theme }) => theme.colors.yellow[400]};

  & > span {
    overflow: hidden;
    overflow-wrap: break-word;
  }
`;

export const MessageUserName = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const UserMessage = styled(Message)`
  align-self: flex-end;
  margin-right: 1rem;
`;

export const OtherUserMessage = styled(Message)`
  align-self: flex-start;
  margin-left: 1rem;
`;

export const MessageInput = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;

    width: 90%;
    border-top: 2px solid ${theme.colors.background.secondary};
    border-left: 2px solid ${theme.colors.background.secondary};
    border-bottom: 2px solid ${theme.colors.background.secondary};

    border-radius: 1rem 0 0 1rem;
    outline: none;
    padding: 2rem;
    color: ${theme.colors.text.primary};
    font-size: 2rem;
  `}
`;

export const SendMessageButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;

    background: transparent;
    border: 2px solid ${theme.colors.background.secondary};
    padding: 1.5rem;
    color: ${theme.colors.yellow[400]};

    border-radius: 0 1rem 1rem 0;

    transition: all 0.2s;

    &:hover {
      background: ${theme.colors.yellow[400]};
      color: ${theme.colors.background.secondary};
      border: 2px solid ${theme.colors.yellow[400]};
    }
  `}
`;
