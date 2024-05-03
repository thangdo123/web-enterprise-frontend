import React, { FormEvent, useState } from "react";
import * as S from "./Login.styled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { ILogin } from "../../interfaces";
import { setNotification } from "../../store/slices/notification";
import { ENotificationType } from "../../enum";
import Logo from "../../assets/images/gw-logo.png";
import { CapsLockOn } from "../../utils/validate.utils";
import { postLogin } from "../../store/slices/userProfile";

export default function Login() {
  const [visible, setvisible] = useState(false);
  const [capsLockStatus, setCapsLockStatus] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    const account: ILogin = {
      email: emailInput,
      password: passwordInput,
    };
    dispatch(postLogin(account))
      .unwrap()
      .catch((message) => {
        dispatch(
          setNotification({
            message: message,
            type: ENotificationType.Error,
          }),
        );
      });
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    window.location.href = "/";
    handleLogin();
  };

  return (
    <S.LoginContainter>
      <S.LoginCenter>
        <S.LoginContainer>
          <S.LoginLogoBanner>
            <S.LogoImg className="logo-img" src={Logo} alt="" />
            <h1>Greenwich University</h1>
          </S.LoginLogoBanner>
        </S.LoginContainer>
        <S.LogoDescription>
          University of Greenwich in London and Kent was established in 1890. We
          are located on the banks of the River Thames in South London.
        </S.LogoDescription>
        <S.LoginField>
          <S.LoginFieldContainer onSubmit={handleOnSubmit}>
            <S.LoginFieldText>
              <p>Login</p>
            </S.LoginFieldText>
            <S.InputField>
              <p>
                <i className="bi bi-envelope"></i>
              </p>
              <input
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
            </S.InputField>
            <S.InputField>
              <p>
                <i className="bi bi-shield-lock-fill"></i>
              </p>
              <input
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyUp={(e) => setCapsLockStatus(CapsLockOn(e))}
                type={visible ? "text" : "password"}
                placeholder="Enter password"
                required
              />
              <S.HidePasswordBtn onClick={() => setvisible(!visible)}>
                {visible ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </S.HidePasswordBtn>
            </S.InputField>
            <S.CapsLockStatus $show={capsLockStatus}>
              Caps Lock is on
            </S.CapsLockStatus>
            <S.ForgotPassword>
              <Link
                to="/resetpassword"
                onClick={() => localStorage.setItem("isSentOtp", "false")}
              >
                Forgot Password?
              </Link>
            </S.ForgotPassword>
            <S.ForgotPassword>
              <Link to="/register">Register as Guest</Link>
            </S.ForgotPassword>
            <S.SignInBtn className="sign-in-btn">Sign in</S.SignInBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
