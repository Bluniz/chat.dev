import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background.gradient};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    color: ${theme.colors.text.primary};
    border-bottom: 1px solid ${theme.colors.background.primary};
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.8rem;
  `}
`;

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.8rem;

    & > img {
      border-radius: 0.8rem;
      width: 5rem;
      height: 5rem;
    }
  `}
`;

export const MessagesContainer = styled.aside`
  ${({ theme }) => css`
    width: 40rem;
    border-right: 1px solid ${theme.colors.background.primary};
    height: 100%;
    overflow: scroll;
  `}
`;

export const CommentButton = styled.button`
  position: absolute;
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 0;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 2rem;
  right: 2rem;

  transition: filter 0.2s;
  & > img {
    width: 3.5rem;
    height: 3.5rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
