import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveBreakpoints";

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Container = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: var(--shadow-sm);
  overflow-x: scroll;
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

const PaginationContainer = styled.div`
  padding: var(--s-4);
  @media ${DEVICES.TABLET} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ActionTitle = styled.div`
  color: var(--blue);
  cursor: pointer;
`;

export {
  TableContainer,
  Container,
  Table,
  TableHeadItem,
  TableItem,
  TableHeadRow,
  TableRow,
  ActionItemContainer,
  ActionTitle,
  PaginationContainer,
};
