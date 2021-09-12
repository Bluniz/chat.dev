import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: ${theme.colors.background.primary};

    overflow: hidden;

    ${theme.breakAt(theme.breakpoints.md)} {
      flex-direction: row;
    }
  `}
`;

export const IllustrationContainer = styled(motion.section)`
  ${({ theme }) => css`
    flex: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text.primary};

    & > h1 {
      font-size: 3rem;
    }

    & > span {
      padding-top: 1rem;
      font-size: 1.2rem;
    }

    & > img {
      width: 30rem;
      height: 30rem;
    }

    ${theme.breakAt(theme.breakpoints.md)} {
      flex: 3;

      & > h1 {
        font-size: 4rem;
      }

      & > span {
        padding-top: 1rem;
        font-size: 1.5rem;
      }

      & > img {
        width: 50rem;
        height: 50rem;
      }
    }
  `}
`;

export const PrincipalContainer = styled(motion.section)`
  ${({ theme }) => css`
    flex: 1;
    color: #eef4ed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 1rem;

    & > span {
      font-size: 3rem;
      font-weight: 700;
      display: none;
    }

    ${theme.breakAt(theme.breakpoints.md)} {
      background: ${theme.colors.background.primary};
      border-left: 1px solid ${theme.colors.background.secondary};
      justify-content: center;
      & > span {
        font-size: 3rem;
        font-weight: 700;
        display: block;
      }
    }
  `}
`;

export const Button = styled(motion.button)`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.background.secondary};
    background: transparent;
    color: ${theme.colors.text.primary};
    font-weight: 500;
    font-size: 1.5rem;

    padding: 1rem 3rem;
    border-radius: 0.9rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    transition: border 0.2s;

    & > img {
      width: 3rem;
      height: 3rem;
    }

    &:hover {
      border: 2px solid ${theme.colors.green[300]};
      color: ${theme.colors.green[300]};
    }

    ${theme.breakAt(theme.breakpoints.md)} {
      border-color: ${theme.colors.background.secondary};
    }
  `}
`;
