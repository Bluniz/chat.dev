import { useState } from "react";
import { Button, ContentContainer, ImgContainer } from "./styles";
import { ReactComponent as CopyImg } from "../../assets/copy.svg";

export function UserCode({ code }) {
  const [copied, setCopied] = useState(false);

  function changeCopiedAfterTimeout(fn, time) {
    fn();
    setTimeout(() => {
      setCopied(false);
    }, time);
  }

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
    setCopied(true);
  }

  function handleClick() {
    changeCopiedAfterTimeout(copyRoomCodeToClipboard, 2000);
  }

  return (
    <Button onClick={handleClick}>
      <ImgContainer>
        <CopyImg />
      </ImgContainer>
      <ContentContainer>
        {copied ? "Código copiado com sucesso!" : code}
      </ContentContainer>
    </Button>
  );
}
