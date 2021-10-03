import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: transparent;
    color: ${theme.colors.text.primary};
    border: 0.1rem solid ${theme.colors.yellow[400]};
    border-radius: 0.8rem;
    height: 4rem;
    padding-right: 1rem;
    cursor: pointer;
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.yellow[400]};
    height: 4rem;
    width: 4rem;
    flex: 1;
    border-radius: 0.8rem 0 0 0.8rem;

    & > svg {
      width: 2rem;
      height: 2rem;
      stroke: ${({ theme }) => theme.colors.text.secondary};
    }
  `}
`;

export const ContentContainer = styled.div`
  flex: 1;
`;
