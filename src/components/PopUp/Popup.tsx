import React from "react";
import * as S from "./Popup.styled";
interface IPopupProps {
  children: JSX.Element;
  show: boolean;
  onClose: () => void;
}

export default function Popup({ children, show, onClose }: IPopupProps) {
  const handleClickContent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };
  return (
    <S.PopupOverlay $show={show} onClick={onClose}>
      <S.PopupContainer onClick={handleClickContent}>
        <S.PopupBody>{children}</S.PopupBody>
      </S.PopupContainer>
    </S.PopupOverlay>
  );
}
