import styled from "styled-components";

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

const ItemTitle = styled.div`
  font-weight: var(--fw-bold);
`;

const ItemContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
`;

const Content = styled.div`
  color: var(--gray);
`;

export { FooterItem, ItemContents, ItemTitle, Content };
