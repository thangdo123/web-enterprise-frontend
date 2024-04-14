import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./EditProfile.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import { deleteCookie } from "../../utils/cookies.utils";
import { updateUserProfile } from "../../store/slices/userProfile";
import { setNotification } from "../../store/slices/notification";
import { ENotificationType } from "../../enum";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { userProfile } = useSelector(
    (state: RootState) => state.adminProfileState,
  );
  const [nameInput, setNameInput] = useState<string>("");
  const [avatarInput, setAvatarInput] = useState<string>("");

  const handleLogOut = () => {
    deleteCookie("token");
    window.location.href = "/";
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newAdminProfile = {
      name: nameInput,
      avatar: avatarInput,
    };
    dispatch(updateUserProfile(newAdminProfile));
    dispatch(
      setNotification({
        message: "Your profile is edited successfully",
        type: ENotificationType.Success,
      }),
    );
  };

  useEffect(() => {
    if (userProfile) {
      setNameInput(userProfile.name);
      setAvatarInput(userProfile.avatar!);
    }
  }, [userProfile]);

  return (
    <S.EditProfieLayout>
      {userProfile && nameInput && (
        <S.EditProfileContainer onSubmit={handleOnSubmit}>
          <S.EditProfileBlock1>
            <h1>Edit Profile</h1>
            <S.Avatar src={userProfile.avatar} alt="Invalid" />
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
          <S.EditProfileInputArea>
            <p>Avatar</p>
            <div>
              <input
                type="text"
                value={avatarInput}
                onChange={(e) => setAvatarInput(e.target.value)}
              />
            </div>
          </S.EditProfileInputArea>
          <S.BottomButtons>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.SaveBtn
              onClick={() => {
                deleteCookie("token");
                navigate("/resetpassword", {
                  state: { email: userProfile.email },
                });
              }}
            >
              Reset Password
            </S.SaveBtn>
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
