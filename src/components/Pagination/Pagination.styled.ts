import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-12);
  width: 100%;
  justify-content: center;
`;

const NextBtn = styled.div`
  display: block;
  cursor: pointer;
`;

const PrevBtn = styled.div`
  display: block;
  cursor: pointer;
`;

const PagesList = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-12);
`;

const PageItem = styled.div`
  display: block;
  cursor: pointer;
`;

export { PaginationContainer, NextBtn, PrevBtn, PagesList, PageItem };
