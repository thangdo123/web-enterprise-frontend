import React from "react";
import * as S from "./FooterContent.styled";
import ContentItem from "../ContentItem/ContentItem";
import Logo from "../Logo/Logo";

const CONTENT_LIST = [
  {
    faculty: "Ha Noi",
    address:
      "Address: Golden Park Tower, 2 Pham Van Bach, Yen Hoa, Cau Giay, Ha Noi",
    phone: "Phone: 024.730 66788",
    mail: "Mail: acad.gre.hn@fe.edu.vn",
  },
  {
    faculty: "Ho Chi Minh",
    address:
      "Address: No. 20 Cong Hoa Street, Ward 12, Tan Binh District, Ho Chi Minh",
    phone: "Phone: 028 7300 6622",
    mail: "Mail: acad.gre.hcm@fe.edu.vn",
  },
  {
    faculty: "Da Nang",
    address:
      "Address: No. 658 Ngo Quyen, An Hai Bac ward, Son Tra district, Da Nang",
    phone: "Phone: 02367. 305.767",
    mail: "Mail: acad.gre.dn@fe.edu.vn",
  },
  {
    faculty: "Can Tho",
    address:
      "Address: No. 160, Street 30/4, An Phu Ward, Ninh Kieu District, Can Tho",
    phone: "Phone: 02923.512.369",
    mail: "Mail: acad.gre.ct@fe.edu.vn",
  },
];

export default function FooterContent() {
  return (
    <S.FooterContent>
      <Logo />
      {CONTENT_LIST.map(({ faculty, address, phone, mail }, index) => (
        <ContentItem
          key={index}
          faculty={faculty}
          address={address}
          phone={phone}
          mail={mail}
        />
      ))}
    </S.FooterContent>
  );
}
