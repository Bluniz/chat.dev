import styled, { css } from "styled-components";

const getPrimaryTextColor = (theme) => {
  return theme.colors.text.primary;
};

const getRedColor = (theme) => {
  return theme.colors.red[200];
};

export const Container = styled.div`
  width: 40rem;
  height: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  & > h1 {
    color: ${({ theme }) => getPrimaryTextColor(theme)};
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  ${({ theme, error }) => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.8rem;

    & > label {
      color: ${getPrimaryTextColor(theme)};
      font-size: 1.3rem;
    }

    & > input {
      background: transparent;
      border: 2px solid
        ${error ? getRedColor(theme) : theme.colors.background.primary};
      border-radius: 0.8rem;
      padding: 0.5rem 1rem;
      font-size: 2rem;
      color: ${getPrimaryTextColor(theme)};
    }

    & > button {
      border: 0;
      background: ${theme.colors.green[300]};
      color: ${getPrimaryTextColor(theme)};
      padding: 1.2rem;
      border-radius: 0.8rem;
      font-weight: bold;
      font-size: 1.5rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    .error {
      color: ${getRedColor(theme)};
      font-weight: bold;
      font-size: 1rem;
    }
  `}
`;
