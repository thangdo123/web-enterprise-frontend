import styled from "styled-components";

export const EditProfieLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const EditProfileContainer = styled.form`
  width: 80%;
  margin-top: 30px;
`;

export const EditProfileBlock1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const EditProfileBlock1Avatar = styled.div`
  color: red;
  background-color: var(--orange-brown);
  font-size: 25px;
  padding: 30px 38px;
  border-radius: 50%;
`;

export const EditProfileBlock2 = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditProfileBlock2Left = styled.div`
  flex: 4;
`;

export const EditProfileBlock2Right = styled.div`
  flex: 3;
`;

export const EditProfileInputArea = styled.div`
  margin-bottom: 30px;
  div {
    margin-top: 15px;
    border: var(--gray-light-2) solid 1px;
    padding: 5px 0 5px 10px;
    border-radius: 5px;
    height: 40px;
    input {
      width: 100%;
      height: 30px;
    }
  }
`;

export const EditProfilePassword = styled.div`
  margin-top: 15px;
  border: var(--gray-light-2) solid 1px;
  padding: 5px 0 5px 10px;
  border-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const EditProfilePasswordInput = styled.input`
  width: 98%;
  height: 30px;
`;

export const EditProfileHidePswBtn = styled.div`
  width: 2%;
`;

export const BottomButtons = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: center;
  gap: 20px;
`;

export const SaveBtn = styled.button`
  padding: 10px 20px;
  background-color: var(--blue);
  border-radius: 5px;
  color: white;
`;

export const CancelBtn = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: var(--gray-light-2) solid 1px;
  border-radius: 5px;
`;
