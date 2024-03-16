import React, { useState } from "react";
import * as S from "./Accounts.styled";
import Toolbar from "../../../components/ToolBar/Toolbar";
import Popup from "../../../components/PopUp/Popup";
import CreateAccount from "./Create/CreateAccount";

export default function Accounts() {
  const [show, setShow] = useState<boolean>(false);

  const handlePopup = () => setShow(!show);

  return (
    <S.TableContainer>
      <Toolbar onClick={handlePopup} />
      <Popup show={show} onClose={handlePopup}>
        <CreateAccount />
      </Popup>
    </S.TableContainer>
  );
}
