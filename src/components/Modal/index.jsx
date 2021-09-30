import {
  Container,
  ModalBody,
  ModalHeader,
  CloseButton,
  ModalContent,
} from "./styles";
import { ReactComponent as DeleteIcon } from "../../assets/x.svg";

export function Modal({ children, onClose, isOpen }) {
  return (
    <>
      {isOpen && (
        <Container>
          <ModalBody>
            <ModalHeader>
              <CloseButton onClick={onClose}>
                <DeleteIcon />
              </CloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </ModalBody>
        </Container>
      )}
    </>
  );
}
