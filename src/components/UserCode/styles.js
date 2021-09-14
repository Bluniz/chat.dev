import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: transparent;
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.green[300]};
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
    background: ${theme.colors.green[300]};
    height: 4rem;
    width: 4rem;
    flex: 1;
    border-radius: 0.8rem 0 0 0.8rem;

    & > img {
      width: 2rem;
      height: 2rem;
    }
  `}
`;

export const ContentContainer = styled.div`
  flex: 1;
`;
