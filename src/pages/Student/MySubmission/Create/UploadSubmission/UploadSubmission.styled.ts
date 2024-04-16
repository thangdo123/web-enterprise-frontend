import styled from "styled-components";
import { DEVICES } from "../../../../../config/responsiveBreakpoints";

export const Container = styled.div`
  width: 60%;
  @media ${DEVICES.TABLET} {
    width: 100%;
  }
`;

export const UploadingFileArea = styled.div`
  text-align: center;
  background-color: rgb(242, 242, 242);
  padding: var(--s-6);
  h3 {
    font-weight: var(--fw-normal);
  }
`;

export const UploadIcon = styled.div`
  display: flex;
  justify-content: center;
  i {
    font-size: var(--fs-6xl);
    color: var(--blue-2);
    &:hover {
      cursor: pointer;
      color: rgb(31, 16, 115);
    }
  }
`;
export const UploadDescription = styled.p`
  color: var(--gray);
`;

export const UploadedFilesArea = styled.div``;

export const FileItems = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(242, 242, 242);
  margin-top: var(--s-2);
`;

export const LeftIcon = styled.p`
  flex: 1;
  color: var(--gray);
`;

export const Filename = styled.p`
  flex: 20;
  color: var(--blue-2);
`;

export const DeleteBtn = styled.p`
  flex: 1;
  color: red;
  i {
    &:hover {
      cursor: pointer;
      color: rgb(153, 14, 5);
    }
  }
`;
