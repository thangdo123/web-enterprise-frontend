import React, { useEffect, useState } from "react";
import * as S from "./Header.styled";
import HeaderList from "./HeaderList/HeaderList";
import HeaderToggle from "./HeaderToggle/HeaderToggle";
import { ISideHeader } from "../../interfaces";
import OffCanvas from "../OffCanvas/OffCanvas";

export default function Header({ headerList }: { headerList: ISideHeader[] }) {
  const [openState, setOpenState] = useState<boolean>(false);
  useEffect(() => {}, [openState]);
  return (
    <S.HeaderContainer>
      <OffCanvas show={openState} onClose={() => setOpenState(!openState)}>
        <HeaderList headerList={headerList} OpenState={openState} />
      </OffCanvas>
      <HeaderToggle OpenState={setOpenState} />
    </S.HeaderContainer>
  );
}
