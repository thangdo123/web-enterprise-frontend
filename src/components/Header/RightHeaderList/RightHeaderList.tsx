import React, { useEffect, useState } from "react";
import * as S from "./RightHeaderList.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router";
import Searchbar from "../../Searchbar/Searchbar";

interface IRightHeaderProps{
  onSearch: (input: string) => void;
}

export default function RightHeaderList({onSearch}:IRightHeaderProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/editprofile");
  };
  const { userProfile } = useSelector(
    (state: RootState) => state.userProfileState,
  );
  const [name, setName] = useState<string>(userProfile.name);
  useEffect(() => {
    setName(userProfile.name);
  }, [userProfile]);
  return (
    <S.RightHeaderList>
      <Searchbar onSearch={onSearch} />
      <S.RightListItem onClick={handleNavigate}>User: {name}</S.RightListItem>
    </S.RightHeaderList>
  );
}
