import styled, { css } from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const MessagesContainer = styled.div`
  ${({ theme }) => css`
    width: 40rem;

    border-right: 1px solid ${theme.colors.background.primary};
    height: 51rem;

    max-height: 51rem;

    overflow-y: scroll;
  `}
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateChatContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

export const CommentButton = styled.button`
  ${({ theme }) => css`
    max-height: 8.1rem;

    background: ${theme.colors.yellow[400]};
    border: 0;

    color: ${theme.colors.text.secondary};

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    bottom: 2rem;
    right: 2rem;

    transition: filter 0.2s;
    & > svg {
      width: 3.5rem;
      height: 3.5rem;
      fill: ${theme.colors.text.secondary};
    }

    & > span {
      font-size: 1.5rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
