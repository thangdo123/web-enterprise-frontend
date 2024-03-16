import React, { useState } from "react";
import * as S from "./Accounts.styled";
import Toolbar from "../../../components/ToolBar/Toolbar";
import Popup from "../../../components/PopUp/Popup";
import CreateAccount from "./Create/CreateAccount";
import Table from "../../../components/Table/Table";

export default function Accounts() {
  const [show, setShow] = useState<boolean>(false);

  const handlePopup = () => setShow(!show);
  const OPTION_LIST = [{ value: "By Name" }, { value: "By Date" }];
  return (
    <S.PageContainer>
      <Toolbar
        onClick={handlePopup}
        pageTitle="Accounts List"
        sortTitle="Sort"
        btnTitle="Add new account"
        optionList={OPTION_LIST}
      />
      <Popup show={show} onClose={handlePopup}>
        <CreateAccount />
      </Popup>
      <Table />
    </S.PageContainer>
  );
}
