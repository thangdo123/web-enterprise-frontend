import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 95%;
`;

export const Block1 = styled.div`
  padding: var(--s-10);
  text-align: center;
  border-bottom: var(--gray-light) solid 1px;
`;

export const BoldTitle = styled.div`
  font-weight: var(--fw-semibold);
  font-family: "Times New Roman", Times, serif;
  font-size: var(--fs-4xl);
`;

export const Block1Description = styled.div`
  font-family: "Times New Roman", Times, serif;
  color: var(--gray);
`;

export const Block2 = styled.div`
  padding-top: var(--s-10);
  border-collapse: collapse;
`;

export const Block2Row = styled.div`
  display: flex;
`;

export const LeftTitle = styled.div`
  width: 15%;
  padding: var(--s-4);
  background-color: var(--gray-light-1);
  border: var(--gray-light-2) solid 1px;
`;

export const Block2RightText = styled.div`
  width: 85%;
  padding: var(--s-4);
  border: var(--gray-light-2) solid 1px;
  &:hover{
    background-color: var(--gray-light-1);
  }
`;

export const FileList = styled.div`
  width: 85%;
  padding: var(--s-4);
  border: var(--gray-light-2) solid 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover{
    background-color: var(--gray-light-1);
  }
`;

export const FileItem = styled.div`
  display: flex;
`;

export const FileName = styled.a`
  color: var(--blue-2);
  padding-left: var(--s-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentList = styled.div`
  width: 85%;
  padding: var(--s-4);
  border: var(--gray-light-2) solid 1px;
  &:hover{
    background-color: var(--gray-light-1);
  }
`;

export const CommentItem = styled.div``;

export const ChoosenStatusBlock = styled.div`
  width: 85%;
  padding: var(--s-4);
  border: var(--gray-light-2) solid 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    &:hover{
    background-color: var(--gray-light-1);
  }
`;

export const ChoosenStatusBlockLeft = styled.div``;

export const ChoosenContributionBtn = styled.button`
  padding: var(--s-1) var(--s-2);
  background-color: var(--green);
  color: white;
  border-radius: var(--br-sm);
`;

export const UnselectContributionBtn = styled.button`
  padding: var(--s-1) var(--s-2);
  background-color: var(--red);
  color: white;
  border-radius: var(--br-sm);
`;

export const Block3 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: var(--s-4);
`;

export const Block3Center = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 3%;
`;

export const CommentTxtArea = styled.textarea`
  border: var(--gray-light-2) solid 1px;
  width: 80%;
  padding: var(--s-3);
`;

export const SubmitCommentBtn = styled.button`
  width: 17%;
  background-color: var(--blue-2);
  padding: var(--s-2) var(--s-4);
  border-radius: var(--br-sm);
  color: white;
`;

export const ButtonGroup = styled.div`
  padding: var(--s-10);
  display: flex;
  justify-content: center;
`;

export const ReturnBtn = styled.button`
  padding: var(--s-2) var(--s-4);
  background-color: var(--blue-2);
  color: white;
  border-radius: var(--br-sm);
`;

export const DeleteBtn = styled.button`
  padding: var(--s-2) var(--s-4);
  background-color: red;
  color: white;
  border-radius: var(--br-sm);
`;
