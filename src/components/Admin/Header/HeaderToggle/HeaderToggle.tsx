import React, { useEffect, useState } from "react";
import * as S from "./HeaderToggle.styled";
import Divider from "../../../Divider/Divider";

export default function HeaderToggle({
  OpenState,
}: {
  OpenState: (state: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const OpenToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    OpenState(isOpen);
  }, [isOpen]);
  return (
    <S.HeaderToggle onClick={OpenToggle}>
      <Divider />
      <S.ToggleBtn>
        {isOpen === true ? (
          <i className="bi bi-caret-left-fill"></i>
        ) : (
          <i className="bi bi-caret-right-fill"></i>
        )}
      </S.ToggleBtn>
    </S.HeaderToggle>
  );
}
