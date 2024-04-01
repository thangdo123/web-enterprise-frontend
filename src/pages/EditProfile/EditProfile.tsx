import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./EditProfile.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import { deleteCookie } from "../../utils/cookies";
import { updateUserProfile } from "../../store/slices/userProfile";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleReturnHome = () =>{
    navigate("/");
  };

  const { userProfile } = useSelector(
    (state: RootState) => state.adminProfileState,
  );
  const [nameInput, setNameInput] = useState<string>("");

  const handleLogOut = () => {
    deleteCookie("token");
    window.location.href = "/login";
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newAdminProfile = {
      name: nameInput,
      avatar: "asdasd",
    };
    dispatch(updateUserProfile(newAdminProfile));
    handleReturnHome();
  };

  useEffect(() => {
    if (userProfile) {
      setNameInput(userProfile.name);
      console.log(userProfile.password);
    }
  }, []);

  return (
    <S.EditProfieLayout>
      {userProfile && nameInput && (
        <S.EditProfileContainer onSubmit={handleOnSubmit}>
          <S.EditProfileBlock1>
            <h1>Edit Profile</h1>
            <S.EditProfileBlock1Avatar>U</S.EditProfileBlock1Avatar>
          </S.EditProfileBlock1>
          <S.EditProfileBlock2>
            <S.EditProfileBlock2Left>
              <S.EditProfileInputArea>
                <p>Name</p>
                <div>
                  <input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    type="text"
                    placeholder="Enter First Name"
                  />
                </div>
              </S.EditProfileInputArea>
            </S.EditProfileBlock2Left>
          </S.EditProfileBlock2>
          <S.EditProfileInputArea>
            <p>Email</p>
            <div>
              <input
                type="text"
                value={userProfile.email}
                placeholder="Enter Email"
                disabled
              />
            </div>
          </S.EditProfileInputArea>
          <S.BottomButtons>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.SaveBtn>Reset Password</S.SaveBtn>
            <S.CancelBtn type="button" onClick={handleLogOut}>
              Logout
            </S.CancelBtn>
          </S.BottomButtons>
        </S.EditProfileContainer>
      )}
    </S.EditProfieLayout>
  );
};

export default EditProfile;
