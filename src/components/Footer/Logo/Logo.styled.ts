import styled from "styled-components";
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
  width: 50%;
`;

const Logo = styled.div`
  font-weight: var(--fw-bold);
`;

const Content = styled.div`
  color: var(--gray);
`;

export { LogoContainer, Logo, Content };
