import React from "react";
import * as S from "./RightHeaderList.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router";

export default function RightHeaderList() {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate("/editprofile");
  };
  const {userProfile} = useSelector((state: RootState)=> state.adminProfileState);
  return (
    <S.RightHeaderList>
      <S.RightListItem>
        <i className="bi bi-search"></i>
      </S.RightListItem>
      <S.RightListItem>
        <i className="bi bi-bell"></i>
      </S.RightListItem>
      <S.RightListItem onClick={handleNavigate}>User: {userProfile.name}</S.RightListItem>
    </S.RightHeaderList>
  );
}
