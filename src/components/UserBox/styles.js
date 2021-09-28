import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
    cursor: pointer;
    padding: 1.5rem;
    gap: 2rem;
    cursor: pointer;

    & > img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    &:hover {
      background: ${theme.colors.background.secondary};
    }
  `}
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.primary};
  gap: 0.3rem;

  & > strong {
    font-size: 1.7rem;
  }

  & > span {
    font-size: 1.4rem;
  }
`;
