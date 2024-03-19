import React, { useEffect, useState } from "react";
import * as S from "./Header.styled";
import HeaderList from "./HeaderList/HeaderList";
import HeaderToggle from "./HeaderToggle/HeaderToggle";

export default function Header() {
  const [openState, setOpenState] = useState<boolean>(false);
  useEffect(() => {}, [openState]);
  return (
    <S.HeaderContainer>
      <HeaderList OpenState={openState} />
      <HeaderToggle OpenState={setOpenState} />
    </S.HeaderContainer>
  );
}
