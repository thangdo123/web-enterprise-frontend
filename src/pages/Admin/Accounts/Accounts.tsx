import React, { useEffect, useState } from "react";
import * as S from "./Accounts.styled";
import Toolbar from "../../../components/ToolBar/Toolbar";
import Popup from "../../../components/PopUp/Popup";
import CreateAccount from "./Create/CreateAccount";
import Table from "./Table/Table";
import { useDispatch } from "react-redux";
import { fetchAllAccounts } from "../../../store/slices/accounts";
import { AppDispatch } from "../../../store";

export default function Accounts() {
  const dispatch = useDispatch<AppDispatch>();

  const [show, setShow] = useState<boolean>(false);
  const handlePopup = () => setShow(!show);
  const OPTION_LIST = [{ value: "By Name" }, { value: "By Date" }];

  useEffect(() => {
    dispatch(fetchAllAccounts());
  }, []);
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
        <CreateAccount onClose={handlePopup} />
      </Popup>
      <Table />
    </S.PageContainer>
  );
}
