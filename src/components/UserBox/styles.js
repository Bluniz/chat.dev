import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
    cursor: pointer;
    padding: 1.5rem;
    gap: 2rem;
    cursor: pointer;

    background: ${active ? theme.colors.green[400] : "transparent"};
    color: ${active
      ? theme.colors.background.primary
      : theme.colors.text.primary};

    & > img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    &:hover {
      background: ${active
        ? theme.colors.green[400]
        : theme.colors.background.secondary};
    }
  `}
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & > strong {
    font-size: 1.7rem;
  }

  & > span {
    font-size: 1.4rem;
  }
`;
