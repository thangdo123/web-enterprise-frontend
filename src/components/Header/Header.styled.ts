import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 var(--s-8);
  border-bottom: 1px solid var(--gray-light-1);
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
`;

const Logo = styled.div`
  color: var(--black);
  padding: var(--s-3) 0;
  text-align: center;
  width: 100%;
`;

export { HeaderContainer, Logo };
