import styled, { css } from "styled-components";

export const Loader = styled.div`
  ${({ theme }) => css`
    border: 0.6rem solid ${theme.colors.background.gradient}; /* Light grey */
    border-top: 0.6rem solid ${theme.colors.green[300]}; /* Blue */
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
