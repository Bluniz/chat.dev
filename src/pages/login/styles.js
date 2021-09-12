import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints, breakAt } from "styles/breakpoints";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background.primary};

  overflow: hidden;

  ${breakAt(breakpoints.md)} {
    flex-direction: row;
  }
`;

export const IllustrationContainer = styled(motion.section)`
  flex: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.green[300]};

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

  ${breakAt(breakpoints.md)} {
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
`;

export const PrincipalContainer = styled(motion.section)`
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

  ${breakAt(breakpoints.md)} {
    background: ${({ theme }) => theme.colors.background.primary};
    border-left: 1px solid ${({ theme }) => theme.colors.background.secondary};
    justify-content: center;
    & > span {
      font-size: 3rem;
      font-weight: 700;
      display: block;
    }
  }
`;

export const Button = styled(motion.button)`
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  background: transparent;
  color: #eef4ed;
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
    border: 2px solid ${({ theme }) => theme.colors.green[300]};
    color: ${({ theme }) => theme.colors.green[300]};
  }

  ${breakAt(breakpoints.md)} {
    border-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;
