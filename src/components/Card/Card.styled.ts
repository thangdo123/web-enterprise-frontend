import styled from "styled-components";

export const CardItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 450px;
`;

export const CardImage = styled.div`
  height: 100%;
  overflow-y: hidden;
  img {
    width: 100%;
    aspect-ratio: 1/0.8;
    /* height: 230px;
    @media(max-width: 534px){
      height: 320px;
    } */
  }
`;

export const CardTitle = styled.div`
  height: 100%;
  border-top: var(--gray-light-2) solid 1px;
  padding: var(--s-6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
