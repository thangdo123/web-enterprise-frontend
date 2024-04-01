import React, { useEffect, useState } from "react";
import * as S from "./Accounts.styled";
import Popup from "../../../components/PopUp/Popup";
import CreateAccount from "./Create/CreateAccount";
import Table from "./Table/Table";
import { useDispatch } from "react-redux";
import {
  fetchAllAccounts,
  searchAccount,
} from "../../../store/slices/Admin/accounts";
import { AppDispatch } from "../../../store";
import Toolbar from "./ToolBar/Toolbar";
import UpdateAccount from "./Update/UpdateAccount";

export default function Accounts() {
  const dispatch = useDispatch<AppDispatch>();
  const [updateAccountName, setUpdateAccountName] = useState<string>("");
  const [updateAccountId, setUpdateAccountId] = useState<string>("");
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const handlePopupCreate = () => setShowCreate(!showCreate);
  const handlePopupUpdate = () => setShowUpdate(!showUpdate);
  const OPTION_LIST = [
    { value: "Student" },
    { value: "Marketing Manager" },
    { value: "Marketing Coordinator" },
  ];

  useEffect(() => {
    dispatch(fetchAllAccounts());
  }, []);
  return (
    <S.PageContainer>
      <Toolbar
        onCreate={handlePopupCreate}
        onSearch={(input: string) => dispatch(searchAccount(input))}
        pageTitle="Accounts List"
        sortTitle="Sort"
        btnTitle="Add new account"
        optionList={OPTION_LIST}
      />
      <Popup show={showCreate} onClose={handlePopupCreate}>
        <CreateAccount onClose={handlePopupCreate} />
      </Popup>

      <Popup show={showUpdate} onClose={handlePopupUpdate}>
        <UpdateAccount
          accountInput={updateAccountName}
          accountId={updateAccountId}
          accountIsLocked={isLocked}
          onClose={handlePopupUpdate}
        />
      </Popup>
      <Table
        handleEdit={handlePopupUpdate}
        handleSelectedAccountId={setUpdateAccountId}
        handleSelectedAccountIsLocked={setIsLocked}
        handleSelectedAccountName={setUpdateAccountName}
      />
    </S.PageContainer>
  );
}
