import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./EditProfile.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updateAdminProfile } from "../../store/slices/userProfile";
import { deleteCookie } from "../../utils/cookies";
import { useNavigate } from "react-router";

const EditProfile = () => {
  // const [password, setPassword] = useState("");
  // const [visible, setvisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { userProfile } = useSelector(
    (state: RootState) => state.adminProfileState,
  );
  const [nameInput, setNameInput] = useState<string>("");
  const [profileId, setProfileId] = useState<string | undefined>("");
  const navigate = useNavigate();

  const handleLogOut = () => {
    deleteCookie("token");
    navigate("/login");
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(profileId);
    const newAdminProfile = {
      Id: profileId!,
      name: nameInput,
      avatar: "asdasd",
    };
    dispatch(updateAdminProfile(newAdminProfile));
  };

  useEffect(() => {
    if (userProfile) {
      setNameInput(userProfile.name);
      setProfileId(userProfile.id);
    }
  }, []);

  return (
    <S.EditProfieLayout>
      {userProfile && (
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
          {/* <div>
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
        </div> */}
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
