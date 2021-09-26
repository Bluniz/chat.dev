import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.background.primary};
    border: 1px solid ${theme.colors.green[300]};
    color: ${theme.colors.text.primary};
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 0.8rem;
    padding: 0.8rem 2rem;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
