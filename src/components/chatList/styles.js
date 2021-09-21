import styled, { css } from "styled-components";

export const MessagesContainer = styled.aside`
  ${({ theme }) => css`
    width: 40rem;
    border-right: 1px solid ${theme.colors.background.primary};
    height: 100%;
    overflow-y: scroll;
    //! FALTA CUSTOMIZAR O SCROLL
  `}
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
