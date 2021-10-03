import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    color: ${theme.colors.text.primary};
    border-bottom: 0.1rem solid ${theme.colors.background.primary};
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.8rem;
    cursor: pointer;

    & > svg {
      fill: ${theme.colors.yellow[400]};
    }
  `}
`;

export const ProfileContainer = styled.div`
  ${({ theme, isMenuOpen }) => css`
    display: flex;

    align-items: center;
    gap: 1.8rem;

    & > img {
      border-radius: 0.8rem;
      width: 5rem;
      height: 5rem;
      cursor: pointer;
    }
  `}
`;
