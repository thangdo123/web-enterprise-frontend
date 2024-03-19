import React, { useEffect, useState } from "react";
import * as S from "./Faculty.styled";
import Toolbar from "../../../components/ToolBar/Toolbar";
import Popup from "../../../components/PopUp/Popup";

import CreateFaculty from "./Create/CreateFaculty";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchAllFaculties } from "../../../store/slices/faculties";
import Table from "./Table/Table";

export default function Faculty() {
  const dispatch = useDispatch<AppDispatch>();
  const [show, setShow] = useState<boolean>(false);

  const handlePopup = () => setShow(!show);
  const OPTION_LIST = [{ value: "By Name" }, { value: "By Date" }];

  useEffect(() => {
    dispatch(fetchAllFaculties());
  }, []);

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
        <CreateFaculty onClose={handlePopup} />
      </Popup>
      <Table />
    </S.PageContainer>
  );
}
