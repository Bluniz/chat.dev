import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;

  background: rgba(40, 42, 54, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: ${({ theme }) => theme.colors.text.primary};
  min-width: 10rem;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.header`
  border: 1px solid red;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 50%;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.background.primary};

    & > svg {
      color: ${({ theme }) => theme.colors.green[300]};
    }
  }
`;

export const ModalContent = styled.main``;
