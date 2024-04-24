import React, { useEffect, useState } from "react";
import * as S from "./AcademicYear.styled";
import Toolbar from "./ToolBar/Toolbar";
import Popup from "../../../components/PopUp/Popup";
import CreateAcademicYear from "./Create/CreateClosureDate";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import Table from "./Table/Table";
import UpdateClosureDate from "./Update/UpdateClosureDate";
import { fetchAcademicYears } from "../../../store/slices/Admin/academicYear";

export default function Faculty() {
  const dispatch = useDispatch<AppDispatch>();
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [updateClosureDate, setUpdateClosureDate] = useState<string>("");
  const [updateFinalClosureDate, setUpdateFinalClosureDate] =
    useState<string>("");
  const [updateAcademicYearId, setUpdateAcademicYearId] = useState<string>("");

  const handlePopupCreate = () => setShowCreate(!showCreate);
  const handlePopupUpdate = () => setShowUpdate(!showUpdate);
  const OPTION_LIST = [{ value: "Ascending" }, { value: "Descending" }];

  useEffect(() => {
    dispatch(fetchAcademicYears(""));
  }, []);

  return (
    <S.PageContainer>
      <Toolbar
        onCreate={handlePopupCreate}
        pageTitle="Academic Years List"
        sortTitle="Sort"
        btnTitle="Add new closure date"
        optionList={OPTION_LIST}
      />
      <Popup show={showCreate} onClose={handlePopupCreate}>
        <CreateAcademicYear onClose={handlePopupCreate} />
      </Popup>

      {showUpdate ? (
        <Popup show={true} onClose={handlePopupUpdate}>
          <UpdateClosureDate
            academicYearId={updateAcademicYearId}
            closureDate={updateClosureDate.slice(0, 16)}
            finalClosureDate={updateFinalClosureDate.slice(0, 16)}
            onClose={handlePopupUpdate}
          />
        </Popup>
      ) : (
        ""
      )}

      <Table
        handleSelectedAcademicYearId={setUpdateAcademicYearId}
        handleSelectedClosureDate={setUpdateClosureDate}
        handleSelectedFinalClosureDate={setUpdateFinalClosureDate}
        handleEdit={handlePopupUpdate}
      />
    </S.PageContainer>
  );
}
