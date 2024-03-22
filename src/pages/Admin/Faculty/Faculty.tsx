import React, { useEffect, useState } from "react";
import * as S from "./Faculty.styled";
import Toolbar from "../../../components/ToolBar/Toolbar";
import Popup from "../../../components/PopUp/Popup";

import CreateFaculty from "./Create/CreateFaculty";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchAllFaculties } from "../../../store/slices/faculties";
import Table from "./Table/Table";
import UpdateFaculty from "./Update/UpdateFaculty";

export default function Faculty() {
  const dispatch = useDispatch<AppDispatch>();
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [updateFacultyName, setUpdateFacultyName] = useState<string>("");
  const [updateFacultyId, setUpdateFacultyId] = useState<string>("");

  const handlePopupCreate = () => setShowCreate(!showCreate);
  const handlePopupUpdate = () => setShowUpdate(!showUpdate);
  const OPTION_LIST = [{ value: "By Name" }, { value: "By Date" }];

  useEffect(() => {
    dispatch(fetchAllFaculties());
  }, []);

  return (
    <S.PageContainer>
      <Toolbar
        onClick={handlePopupCreate}
        pageTitle="Faculties List"
        sortTitle="Sort"
        btnTitle="Add new faculty"
        optionList={OPTION_LIST}
      />
      <Popup show={showCreate} onClose={handlePopupCreate}>
        <CreateFaculty onClose={handlePopupCreate} />
      </Popup>

      <Popup show={showUpdate} onClose={handlePopupUpdate}>
        <UpdateFaculty
          facultyId={updateFacultyId}
          facultyInput={updateFacultyName}
          onClose={handlePopupUpdate}
        />
      </Popup>
      <Table
        handleSelectedFacultyId={setUpdateFacultyId}
        handleSelectedFacultyName={setUpdateFacultyName}
        handleEdit={handlePopupUpdate}
      />
    </S.PageContainer>
  );
}
