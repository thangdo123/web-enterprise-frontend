import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import * as S from "./ChosenContributions.styled";
import {
  downloadContributions,
  getAllChosenContributions,
} from "../../../store/slices/Manager/chosenContributions";
import Toolbar from "./ToolBar/Toolbar";
import Table from "./Table/Table";
import { IChosenContribution } from "../../../interfaces/chosenContribution";
import Popup from "../../../components/PopUp/Popup";
import ChosenContributionDetail from "./Detail/ChosenContributionDetail";

export default function ChosenContributions() {
  const dispatch = useDispatch<AppDispatch>();
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [chosenContribution, setChosenContribution] =
    useState<IChosenContribution>();
  const OPTION_LIST = [{ value: "Ascending" }, { value: "Descending" }];

  const handlePopupDetail = () => setShowDetail(!showDetail);
  const handleDownloadContributions = () => dispatch(downloadContributions());
  useEffect(() => {
    dispatch(getAllChosenContributions(""));
  }, []);
  return (
    <S.PageContainer>
      <Toolbar
        onSearch={(input: string) => console.log(input)}
        pageTitle="Chosen Contributions"
        sortTitle="Sort"
        optionList={OPTION_LIST}
        downloadContributions={handleDownloadContributions}
        btnTitle="Download Contributions"
      />
      <Popup show={showDetail} onClose={handlePopupDetail}>
        <ChosenContributionDetail
          chosenContribution={chosenContribution!}
          onClose={handlePopupDetail}
        />
      </Popup>
      <Table
        handlePopupDetail={handlePopupDetail}
        handleChosenContribution={setChosenContribution}
      />
    </S.PageContainer>
  );
}
