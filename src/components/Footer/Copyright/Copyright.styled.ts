import styled from "styled-components";

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CopyrightText = styled.div`
  color: var(--gray);
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-1);
`;

export { CopyrightContainer, CopyrightText, SocialMedia };
