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
  background-color: ${({ theme }) => theme.colors.background.secondary};
  min-width: 10rem;
  display: flex;
  flex-direction: column;

  border-radius: 0.8rem;
`;

export const ModalHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  background-color: transparent;
`;

export const CloseButton = styled.button`
  border: 0;
  padding: 0.4rem;
  border-radius: 50%;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.background.primary};

    & > svg {
      color: ${({ theme }) => theme.colors.yellow[400]};
    }
  }
`;

export const ModalContent = styled.main``;
