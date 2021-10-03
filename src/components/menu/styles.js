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
    background: transparent;
    border: 0.1rem solid ${theme.colors.yellow[400]};
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
