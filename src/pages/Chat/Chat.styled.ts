import styled from "styled-components";

const PageContainer = styled.div`
  padding: var(--s-4) var(--s-10);
`;

const ConversationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
`;

export { PageContainer, ConversationContainer };
