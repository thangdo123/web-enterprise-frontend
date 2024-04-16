import React from "react";
import * as S from "./HeaderToggle.styled";
import Divider from "../../Divider/Divider";

export default function HeaderToggle({
  OpenState,
}: {
  OpenState: (state: boolean) => void;
}) {
  return (
    <S.HeaderToggle onClick={() => OpenState(true)}>
      <Divider />
      <S.ToggleBtn>
        <i className="bi bi-caret-right-fill"></i>
      </S.ToggleBtn>
    </S.HeaderToggle>
  );
}
