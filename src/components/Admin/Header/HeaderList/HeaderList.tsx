import React, { useState } from "react";
import * as S from "./HeaderList.styled";
import HeaderItem from "../HeaderItem/HeaderItem";

const HEADER_LIST = [
  {
    title: "Overview",
    path: "/",
    icon: <i className="bi bi-house-door-fill"></i>,
  },
  {
    title: "Accounts List",
    path: "/accounts",
    icon: <i className="bi bi-person-badge-fill"></i>,
  },
  {
    title: "Faculties List",
    path: "/faculties",
    icon: <i className="bi bi-buildings-fill"></i>,
  },
  {
    title: "Closure Date",
    path: "/closuredate",
    icon: <i className="bi bi-alarm-fill"></i>,
  },
];

export default function HeaderList({ OpenState }: { OpenState: boolean }) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleSelectedIndex = (index: number) => setSelectedIndex(index);
  return (
    <S.ListContainer>
      {HEADER_LIST.map(({ title, path, icon }, index) => (
        <S.HeaderItemWrapper
          key={index}
          onClick={() => handleSelectedIndex(index)}
        >
          <HeaderItem
            title={title}
            path={path}
            icon={icon}
            openState={OpenState}
            isSelected={selectedIndex === index}
          />
        </S.HeaderItemWrapper>
      ))}
    </S.ListContainer>
  );
}
