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
