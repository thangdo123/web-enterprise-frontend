import React, { FormEvent, useState } from "react";
import * as S from "./ChangePassword.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setNotification } from "../../store/slices/notification";
import { ENotificationType } from "../../enum";
import { useParams } from "react-router";
import { resetDefaultPassword } from "../../store/slices/resetDefaultPassword";

export default function ChangePassword() {
  const dispatch = useDispatch<AppDispatch>();
  const { email } = useParams();
  const { default_pasword } = useParams();

  const handleChangePassword = () => {
    const account = {
      email: email!,
      default_pasword: default_pasword!,
      newPassword: newPassword!,
      reNewPassword: reNewPassword!,
    };
    dispatch(resetDefaultPassword(account))
      .unwrap()
      .catch((rejectedValueOrSerializedError) => {
        dispatch(
          setNotification({
            message: rejectedValueOrSerializedError.response.data.message,
            type: ENotificationType.Error,
          }),
        );
      });
  };

  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleChangePassword();
  };

  return (
    <S.LoginContainter>
      <S.LoginCenter>
        <div className="login-logo">
          <S.LoginLogoBanner>
            <S.LogoImg
              className="logo-img"
              src="https://cdn.haitrieu.com/wp-content/uploads/2022/12/Icon-Truong-Dai-hoc-Greenwich-Viet-Nam.png"
              alt=""
            />
            <h1>Greenwich University</h1>
          </S.LoginLogoBanner>
          <S.LogoDescription>
            University of Greenwich in London and Kent was established in 1890.
            We are located on the banks of the River Thames in South London.
          </S.LogoDescription>
        </div>
        <S.LoginField>
          <S.LoginFieldContainer onSubmit={handleOnSubmit}>
            <S.LoginFieldText>
              <p>Reset default password</p>
            </S.LoginFieldText>
            <S.InputField>
              <p>
                <i className="bi bi-person-circle"></i>
              </p>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                placeholder="Enter your new password"
                required
              />
            </S.InputField>
            <S.InputField>
              <p>
                <i className="bi bi-person-circle"></i>
              </p>
              <input
                value={reNewPassword}
                onChange={(e) => setReNewPassword(e.target.value)}
                type="password"
                placeholder="Re-enter your new password"
                required
              />
            </S.InputField>
            <S.SignInBtn className="sign-in-btn">Submit</S.SignInBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
