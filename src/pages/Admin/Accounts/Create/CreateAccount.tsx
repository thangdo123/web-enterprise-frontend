import React, { useState } from "react";
import * as S from "./CreateAccount.Styled";
import Dropdown from "../../../../components/Dropdown/Dropdown";


const CreateAccount = () => {
  const [password, setPassword] = useState("");
  const [visible, setvisible] = useState(false);

  const dropDownItems = [{value: "Student"}, {value: "Marketing Cordinator"}, {value: "Marketing Manager"}, {value: "Admin"}];
  const title = "Role";
  return (
    <S.CreateAccountLayout>
      <S.CreateAccountContainer>
        <S.CreateAccountBlock1>
          <S.CreateAccountLeftTitle>Username:</S.CreateAccountLeftTitle>
          <S.CreateAccountBlock1Right>
            <input placeholder="Enter Username" />
          </S.CreateAccountBlock1Right>
        </S.CreateAccountBlock1>
        <S.CreateAccountBlock2>
          <S.CreateAccountLeftTitle>Password:</S.CreateAccountLeftTitle>
          <S.CreateAccountBlock2Right>
            <S.EnterPasswordField
              type={visible ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
            />
            <S.HidePasswordBtn onClick={() => setvisible(!visible)}>
              {visible ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </S.HidePasswordBtn>
          </S.CreateAccountBlock2Right>
        </S.CreateAccountBlock2>
        <S.CreateAccountBlock3>
          <S.CreateAccountLeftTitle>Role:</S.CreateAccountLeftTitle>
          <Dropdown title={title} optionList={dropDownItems} />
        </S.CreateAccountBlock3>
        <S.BottomBtn>
          <div>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.CancelBtn>Cancel</S.CancelBtn>
          </div>
        </S.BottomBtn>
      </S.CreateAccountContainer>
    </S.CreateAccountLayout>
  );
};

export default CreateAccount;
