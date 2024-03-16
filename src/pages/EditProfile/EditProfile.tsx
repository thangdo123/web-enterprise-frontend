import React, { useState } from "react";
import * as S from "./EditProfile.styled";

const EditProfile = () => {
  const [password, setPassword] = useState("");
  const [visible, setvisible] = useState(false);
  return (
    <S.EditProfieLayout>
      <S.EditProfileContainer>
        <S.EditProfileBlock1>
          <h1>Edit Profile</h1>
          <S.EditProfileBlock1Avatar>U</S.EditProfileBlock1Avatar>
        </S.EditProfileBlock1>
        <S.EditProfileBlock2>
          <S.EditProfileBlock2Left>
            <S.EditProfileInputArea>
              <p>First Name</p>
              <div>
                <input type="text" placeholder="Enter First Name" />
              </div>
            </S.EditProfileInputArea>
          </S.EditProfileBlock2Left>
          <S.EditProfileBlock2Right>
            <S.EditProfileInputArea>
              <p>Last Name</p>
              <div>
                <input type="text" placeholder="Enter Last Name" />
              </div>
            </S.EditProfileInputArea>
          </S.EditProfileBlock2Right>
        </S.EditProfileBlock2>
        <S.EditProfileInputArea>
          <p>Email</p>
          <div>
            <input type="text" placeholder="Enter Email" />
          </div>
        </S.EditProfileInputArea>
        <S.EditProfileInputArea>
          <p>Address</p>
          <div>
            <input type="text" placeholder="Enter Address" />
          </div>
        </S.EditProfileInputArea>
        <S.EditProfileInputArea>
          <p>Contact Number</p>
          <div>
            <input type="text" placeholder="Enter Contact Number" />
          </div>
        </S.EditProfileInputArea>
        <div>
          <p>Password</p>
          <S.EditProfilePassword>
            <S.EditProfilePasswordInput
              type={visible ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
            />
            <S.EditProfileHidePswBtn onClick={() => setvisible(!visible)}>
              {visible ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </S.EditProfileHidePswBtn>
          </S.EditProfilePassword>
        </div>
        <S.BottomButtons>
          <S.SaveBtn>Save</S.SaveBtn>
          <S.CancelBtn>Cancel</S.CancelBtn>
        </S.BottomButtons>
      </S.EditProfileContainer>
    </S.EditProfieLayout>
  );
};

export default EditProfile;
