import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--gray-light-2);
  padding: var(--s-1) var(--s-4);
  border-radius: var(--br-md);
`;

const Icon = styled.div`
  cursor: pointer;
  display: block;
  padding-left: var(--s-2);
`;

const Input = styled.input`
  display: block;
  background-color: inherit;
`;

export { SearchContainer, Icon, Input };
