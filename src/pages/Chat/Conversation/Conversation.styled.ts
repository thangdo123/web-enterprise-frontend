import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
  width: 20%;
`;

const ListTitle = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-weight: var(--fw-bold);
  font-size: var(--fs-xl);
`;

const ListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-2);
  cursor: pointer;
  &:hover {
    background-color: var(--gray-light);
  }
`;

const ItemAva = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--blue);
`;

const ItemName = styled.div`
  font-weight: var(--fw-bold);
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemMsg = styled.div`
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: var(--fw-light);
`;

export {
  ListContainer,
  ListTitle,
  ListItemsContainer,
  ListItem,
  ItemAva,
  ItemName,
  ItemInfo,
  ItemMsg,
};
