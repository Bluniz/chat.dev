import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background.default};
  `}
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const MainChatContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${theme.colors.text.primary};

    & > svg {
      width: 45rem;
      height: 45rem;
    }
    & > span {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0.2rem;
      max-width: 45 rem;
    }
  `}
`;
