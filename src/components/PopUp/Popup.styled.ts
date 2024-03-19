import styled from "styled-components";

const PopupOverlay = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black-opacity);
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80%;
  margin: 0 var(--s-8);
  background-color: var(--white);
  padding: var(--s-4);
  border-radius: var(--br-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

const PopupBody = styled.div`
  width: 100%;
`;

export { PopupOverlay, PopupContainer, PopupBody };
