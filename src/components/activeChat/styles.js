import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const Wrapper = styled.div`
  min-height: 50rem;
  max-height: 50rem;
  overflow: scroll;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 2rem;
  padding: 0rem 2rem;
  gap: 1rem;
`;

export const Message = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  min-width: 25rem;
  max-width: 40rem;

  background: ${({ theme }) => theme.colors.green[400]};

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

export const CreateMessageContainer = styled.form`
  ${({ theme }) => css`
    //  justify-self: flex-end;
    width: 100%;

    padding: 2rem;

    display: flex;
  `}
`;

export const MessageInput = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;

    flex: 15;
    border-top: 2px solid ${theme.colors.background.secondary};
    border-left: 2px solid ${theme.colors.background.secondary};
    border-bottom: 2px solid ${theme.colors.background.secondary};

    border-radius: 1rem 0 0 1rem;
    outline: none;
    padding: 1rem;
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
    color: ${theme.colors.green[300]};

    border-radius: 0 1rem 1rem 0;

    transition: all 0.2s;

    &:hover {
      background: ${theme.colors.green[300]};
      color: ${theme.colors.background.secondary};
      border: 2px solid ${theme.colors.green[300]};
    }
  `}
`;
