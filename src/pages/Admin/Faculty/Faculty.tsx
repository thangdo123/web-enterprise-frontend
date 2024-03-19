import React, { useState } from "react";
import * as S from "./Faculty.styled";
import Toolbar from "../../../components/ToolBar/Toolbar";
import Popup from "../../../components/PopUp/Popup";

import CreateFaculty from "./Create/CreateFaculty";
import Table from "./Table/Table";

export default function Faculty() {
  const [show, setShow] = useState<boolean>(false);

  const handlePopup = () => setShow(!show);
  const OPTION_LIST = [{ value: "By Name" }, { value: "By Date" }];
  return (
    <S.PageContainer>
      <Toolbar
        onClick={handlePopup}
        pageTitle="Faculties List"
        sortTitle="Sort"
        btnTitle="Add new faculty"
        optionList={OPTION_LIST}
      />
      <Popup show={show} onClose={handlePopup}>
        <CreateFaculty />
      </Popup>
      <Table />
    </S.PageContainer>
  );
}
