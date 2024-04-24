import React, { useEffect } from "react";
import * as S from "./ExceptionReport.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getAllExceptionReports } from "../../../store/slices/Manager/exceptionReports";
import Table from "./Table/Table";
import Dropdown from "../../../components/Dropdown/Dropdown";

export default function ExceptionReports() {
  const dispatch = useDispatch<AppDispatch>();
  const OPTION_LIST = [{ value: "14 days" }];
  const sortType = (type: string) => {
    if (type === "14 days") {
      dispatch(getAllExceptionReports(true));
    } else {
      dispatch(getAllExceptionReports(false));
    }
  };
  useEffect(() => {
    dispatch(getAllExceptionReports(""));
  }, []);
  return (
    <S.PageContainer>
      <S.ToolBar>
        <S.Title>Exception Reports</S.Title>
        <Dropdown
          onClick={(option) => sortType(option.value!)}
          title="Sort"
          optionList={OPTION_LIST}
        />
      </S.ToolBar>
      <Table />
    </S.PageContainer>
  );
}
