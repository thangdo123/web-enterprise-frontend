import styled from "styled-components";

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
  @media (max-width: 860px){
    flex-wrap: wrap;
  }
`;

export { FooterContent };
