import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./EditProfile.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import {
  decodeCookie,
  deleteCookie,
  getCookie,
} from "../../utils/cookies.utils";
import {
  getAdminProfile,
  getUserProfile,
  updateUserProfile,
} from "../../store/slices/userProfile";
import { setNotification } from "../../store/slices/notification";
import { ENotificationType } from "../../enum";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = getCookie("token");
  const navigate = useNavigate();
  const { userProfile } = useSelector(
    (state: RootState) => state.userProfileState,
  );
  const [nameInput, setNameInput] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = e.target.files;
      setFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
    }
  };

  const handleLogOut = () => {
    deleteCookie("token");
    window.location.href = "/";
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameInput);
    files.forEach((item) => {
      formData.append("files", item);
    });
    dispatch(updateUserProfile(formData))
      .unwrap()
      .then((action) => {
        dispatch(
          setNotification({
            message: action.message,
            type: ENotificationType.Success,
          }),
        );
      })
      .catch((message) => {
        dispatch(
          setNotification({
            message: message,
            type: ENotificationType.Error,
          }),
        );
      });
  };

  useEffect(() => {
    if (decodeCookie(token) === "ADMIN") {
      dispatch(getAdminProfile());
    } else {
      dispatch(getUserProfile());
    }
  }, []);

  useEffect(() => {
    if (userProfile) {
      setNameInput(userProfile.name);
    }
  }, [userProfile]);

  return (
    <S.EditProfieLayout>
      {userProfile && (
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
                type="email"
                value={userProfile.email}
                placeholder="Enter Email"
                disabled
              />
            </div>
          </S.EditProfileInputArea>
          <S.EditProfileInputArea>
            <p>Avatar</p>
            <div>
              <input type="file" onChange={handleFileChange} />
            </div>
          </S.EditProfileInputArea>
          <S.BottomButtons>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.SaveBtn
              onClick={() => {
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
