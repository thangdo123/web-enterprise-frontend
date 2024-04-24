import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 95%;
`;

export const Block1 = styled.div`
  padding: var(--s-12);
  text-align: center;
  border-bottom: var(--gray-light-2) solid 1px;
`;

export const Block1Title = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: var(--fs-4xl);
  font-weight: var(--fw-semibold);
`;

export const Block1Description = styled.div`
  font-family: "Times New Roman", Times, serif;
`;

export const Block2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--s-4);
`;

export const Block2LeftTitle = styled.div`
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
`;

export const Block2Right = styled.div`
  display: flex;
  gap: var(--s-4);
  align-items: center;
`;

export const Block2RightText = styled.div``;

export const Block2DropDown = styled.div`
  border: var(--gray-light-2) solid 1px;
  border-radius: var(--br-md);
  padding: var(--s-1) var(--s-2);
  min-width: var(--s-13);
`;

export const Block3IfNoSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--s-6) 0;
  font-size: var(--fs-3xl);
  font-family: "Merriweather", serif;
  color: var(--red);
`;

export const Block3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5%;
  padding-top: var(--s-7);
  @media ${DEVICES.TABLET}{
    justify-content: space-evenly;
  }
`;

export const Block3ItemsIfEmptyArr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--s-6) 0;
  font-size: var(--fs-3xl);
  font-family: "Merriweather", serif;
  color: var(--blue-2);
`;

export const Block3Items = styled.div`
  cursor: pointer;
  width: 18.8%;
  margin-bottom: var(--s-5);
  border: var(--gray-light-2) solid 1px;
  @media ${DEVICES.TABLET}{
    width: 250px;
  }
  @media(max-width: 534px){
    width: 350px;
  }
`;

export const Block3ItemImg = styled.img`
  width: 100%;
  height: 230px;
  @media (max-width: 534px) {
    height: 320px;
  }
`;

export const Block3ItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: var(--gray-light-2) solid 1px;
  padding: var(--s-6);
`;

export const Block3ItemTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Block3ItemAuthor = styled.div`
  font-weight: var(--fw-semibold);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
