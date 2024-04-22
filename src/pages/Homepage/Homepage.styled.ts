import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

export const Navbar = styled.div`
  border-bottom: var(--gray-light-1) solid 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--s-2);
`;

export const NavbarLeft = styled.div`
  font-size: var(--fs-3xl);
  font-weight: var(--fw-semibold);
  width: 30%;
  font-family: "Merriweather", serif;
  @media ${DEVICES.TABLET}{
    font-size: var(--fs-2xl);
  }
  @media ${DEVICES.PHONE}{
    font-size: var(--fs-xl);
  }
  @media (max-width: 430px){
    font-size: var(--fs-md);
  }
`;

export const NavbarLogo = styled.img`
  width: 15%;
  @media ${DEVICES.TABLET}{
    width: 35%;
  }
`;

export const NavbarRight = styled.div`
  width: 30%;
  text-align: right;
`;

export const LoginBtn = styled.button`
  background-color: black;
  border-radius: var(--br-xl);
  padding: var(--s-2) var(--s-4);
  color: white;
  text-decoration: none;
  font-size: var(--fs-md);
  font-family: "Merriweather", serif;
`;

export const Block1 = styled.div``;

export const BottomBlockLayout = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomBlockContainer = styled.div`
  width: 95%;
`;

export const Block2 = styled.div`
  padding: var(--s-8) 0;
  text-align: center;
  border-bottom: var(--gray-light-2) solid 1px;
  border-top: var(--gray-light-2) solid 1px;
`;

export const Block2Title = styled.div`
  font-weight: var(--fw-semibold);
  font-family: "Merriweather", serif;
  font-size: var(--fs-3xl);
`;

export const Block2Description = styled.div`
  font-family: "Merriweather", serif;
`;

export const Block3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1.5%;
  padding-top: var(--s-7);
`;

export const Block3Items = styled.div`
  width: 250px;
  margin-bottom: var(--s-5);
  border: var(--gray-light-2) solid 1px;
  @media (max-width: 534px) {
    width: 350px;
  }
`;

export const Block3ItemsImg = styled.img`
  width: 100%;
  height: 230px;
  @media (max-width: 534px) {
    height: 320px;
  }
`;

export const Block3ItemsBottom = styled.div`
  padding: var(--s-6);
  border: var(--gray-light-2) solid 1px;
`;

export const Block3ItemsTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Block3ItemsAuthor = styled.div`
  font-weight: var(--fw-semibold);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EmtyItemText = styled.div`
  text-align: center;
  font-size: var(--fs-4xl);
  font-family: "Times New Roman", Times, serif;
  font-weight: var(--fw-semibold);
  padding: var(--s-8) 0;
`;
