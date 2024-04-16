import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-2);
`;

const HeaderItemWrapper = styled.div`
  display: block;
`;

const Logout = styled.div`
  cursor: pointer;
  color: var(--red);
  padding: var(--s-4);

  &:hover {
    background-color: var(--blue-light);
  }
`;

export { ListContainer, HeaderItemWrapper, Logout };
