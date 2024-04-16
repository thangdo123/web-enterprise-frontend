import React, { useEffect } from "react";
import * as S from "./ExceptionReport.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getAllExceptionReports } from "../../../store/slices/Manager/exceptionReports";
import Table from "./Table/Table";

export default function ExceptionReports() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllExceptionReports());
  }, []);
  return (
    <S.PageContainer>
      <S.ToolBar>
        <S.Title>Exception Reports</S.Title>
      </S.ToolBar>
      <Table />
    </S.PageContainer>
  );
}
