import styled from "styled-components";

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SortBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const TitleBtn = styled.div`
  font-weight: var(--fw-light);
`;

export { SortContainer, SortBtn, TitleBtn };
