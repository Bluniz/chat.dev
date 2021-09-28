import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: scroll;
  `}
`;

export const Message = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  min-width: 25rem;
  background: ${({ theme }) => theme.colors.green[400]};
`;

export const MessageUserName = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const UserMessage = styled(Message)`
  align-self: flex-end;
  margin-right: 1rem;
`;

export const OtherUserMessage = styled(Message)`
  align-self: flex-start;
  margin-left: 1rem;
`;
