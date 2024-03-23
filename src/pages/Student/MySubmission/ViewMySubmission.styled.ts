import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  h1,
  h2 {
    font-family: "Times New Roman", Times, serif;
    font-weight: var(--fw-semibold);
  }
`;

export const Container = styled.div`
  width: 95%;
`;

export const Block1 = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--s-6);
  div {
    text-align: center;
    h1 {
      margin: 0;
      margin-bottom: var(--s-6);
    }
    p {
      margin: 0;
    }
  }
`;

export const Block2 = styled.div`
  padding: var(--s-6);
`;

export const Block2Title = styled.h2`
  margin-bottom: 20px;
`;

export const Block2SubmissionList = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5%;
  flex-wrap: wrap;
`;

export const Block2SubmissionItemsContainer = styled.div`
  width: 30%;
  margin-bottom: var(--s-10);
`;

export const SubmissionItems = styled.div``;

export const SubmissionImg = styled.div`
  img {
    width: 100%;
  }
`;

export const SubmissionTitle = styled.div`
  border: var(--gray-light-2) solid 1px;
  padding: var(--s-6);
`;

export const Block3 = styled.div``;

export const Block3Title = styled.h2``;

export const Block3Top = styled.div`
  display: flex;
  margin-bottom: var(--s-3);
`;

export const Block3TopLeft = styled.div`
  flex: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Block3Sort = styled.div``;

export const Block3Date = styled.p`
  margin: 0;
`;

export const Block3TopRight = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  button{
    background-color: var(--blue-2);
    padding: 5px 10px;
    color: white;
    border-radius: 3px;
  }
`;

export const Block3SubmissionList = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 2%;
    flex-wrap: wrap;
`;

export const Block3SubmissionItemsContainer = styled.div`
    width: 23.5%;
    margin-bottom: var(--s-10);
`;

export const Block3Bottom = styled.div`
    display:flex;
    justify-content: center;
    button{
        background-color: white;
        border: var(--gray-light-2) solid 1px;
        border-radius: 3px;
        padding: 5px 10px;
    }
`;
