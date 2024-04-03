import React, { useEffect, useState } from "react";
import * as S from "./RightHeaderList.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router";

export default function RightHeaderList() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/editprofile");
  };
  const { userProfile } = useSelector(
    (state: RootState) => state.adminProfileState,
  );
  const [name, setName] = useState<string>(userProfile.name);
  useEffect(() => {
    setName(userProfile.name);
  }, [userProfile]);
  return (
    <S.RightHeaderList>
      <S.RightListItem>
        <i className="bi bi-search"></i>
      </S.RightListItem>
      <S.RightListItem>
        <i className="bi bi-bell"></i>
      </S.RightListItem>
      <S.RightListItem onClick={handleNavigate}>User: {name}</S.RightListItem>
    </S.RightHeaderList>
  );
}
