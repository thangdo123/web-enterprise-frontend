import React, { useState } from "react";
import * as S from "./CreateAccount.Styled";

const CreateAccount = () => {
  const [password, setPassword] = useState("");
  const [visible, setvisible] = useState(false);

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
          <S.CreateAccountBlock3Right>
            <p>
              Role <i className="bi bi-caret-down-fill"></i>
            </p>
            <S.RoleChoosing>
              <S.RoleChoosingItems>
                <input type="radio" name="fav_language" value="" />
                <label>Student</label>
              </S.RoleChoosingItems>
              <S.RoleChoosingItems>
                <input type="radio" name="fav_language" value="" />
                <label>Marketing Cordinator</label>
              </S.RoleChoosingItems>
              <S.RoleChoosingItems>
                <input type="radio" name="fav_language" value="" />
                <label>Marketing Manager</label>
              </S.RoleChoosingItems>
              <S.RoleChoosingItems>
                <input type="radio" name="fav_language" value="" />
                <label>Admin</label>
              </S.RoleChoosingItems>
            </S.RoleChoosing>
          </S.CreateAccountBlock3Right>
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
