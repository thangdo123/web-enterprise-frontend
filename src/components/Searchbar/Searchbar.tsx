import React, { FormEvent, useState } from "react";
import * as S from "./Searchbar.styled";

interface ISearchbarProps {
  onSearch: (input: string) => void;
}

export default function Searchbar({ onSearch }: ISearchbarProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };
  return (
    <S.SearchContainer onSubmit={handleOnSubmit}>
      <S.Input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
      />
      <S.Icon type="submit">
        <i className="bi bi-search"></i>
      </S.Icon>
    </S.SearchContainer>
  );
}
