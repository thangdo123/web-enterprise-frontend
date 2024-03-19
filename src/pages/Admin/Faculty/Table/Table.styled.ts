import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: var(--shadow-sm);
`;

const TableHeadRow = styled.tr`
  background-color: var(--gray-light);
  :last-child {
    border-right: none;
  }
`;

const TableRow = styled.tr`
  background-color: var(--white);
`;

const TableHeadItem = styled.th`
  border-bottom: 1px solid var(--gray-light-2);
  border-right: 1px solid var(--gray-light-2);
  text-align: left;
  padding: var(--s-2);
`;

const TableItem = styled.td`
  text-align: left;
  padding: var(--s-2);
  border-bottom: 1px solid var(--gray-light-2);
`;

const ActionItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: var(--s-4);
`;

const ActionTitle = styled.div`
  color: var(--blue);
`;

export {
  Table,
  TableHeadItem,
  TableItem,
  TableHeadRow,
  TableRow,
  ActionItemContainer,
  ActionTitle,
};
