import styled from "styled-components";

export const CreateAccountLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
`;

export const CreateAccountContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const CreateAccountBlock1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const CreateAccountLeftTitle = styled.div`
  width: 35%;
  font-weight: bold;
`;

export const CreateAccountBlock1Right = styled.div`
  width: 65%;
  border: var(--gray) solid 1px;
  padding: 10px;
  border-radius: 10px;
  input {
    width: 100%;
  }
`;

export const CreateAccountBlock2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const CreateAccountBlock2Right = styled.div`
  width: 65%;
  border: var(--gray) solid 1px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
`;

export const EnterPasswordField = styled.input`
  width: 96%;
`;

export const HidePasswordBtn = styled.div`
  width: 4%;
  &:hover {
    cursor: pointer;
  }
`;

export const CreateAccountBlock3 = styled.div`
  display: flex;
  width: 100%;
`;

export const CreateAccountBlock3Right = styled.div`
  p {
    font-weight: bold;
  }
`;

export const RoleChoosing = styled.div`
  margin-top: 10px;
`;

export const RoleChoosingItems = styled.div`
  margin-bottom: 5px;
  label {
    margin-left: 10px;
  }
`;

export const BottomBtn = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const SaveBtn = styled.button`
  background-color: var(--blue);
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const CancelBtn = styled.button`
  background-color: var(--red);
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const ToggleBtn = styled.div<{ $isSelected: boolean }>`
  background-color: ${({ $isSelected }) => ($isSelected ? "red" : "white")};
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid var(--black);
  padding: var(--s-2);
`;
