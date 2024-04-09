import styled from "styled-components";

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
`;

export const NavbarLogo = styled.img`
  width: 15%;
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
  padding-top: var(--s-7);
  display: flex;
  flex-wrap: wrap;
  gap: 1.5%;
`;

export const Block3Items = styled.div`
  width: 23.8%;
  padding-bottom: var(--s-5);
`;

export const Block3ItemsImg = styled.img`
  width: 100%;
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
