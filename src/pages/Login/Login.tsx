import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { postLogin } from "../../store/slices/login";
import { getCookie } from "../../utils/cookies";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(
    (state: RootState) => state.loginState.isLoggedin,
  );
  const navigate = useNavigate();

  const handleLogin = () => {
    const account: ILogin = {
      email: emailInput,
      password: passwordInput,
    };
    dispatch(postLogin(account));
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  useEffect(() => {
    const token = getCookie("token");
    if (isLoggedIn || token) {
      navigate("/");
    }
  }, [isLoggedIn]); // Run whenever isLoggedIn changes

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
              <p>Login</p>
            </S.LoginFieldText>
            <S.InputField>
              <p>
                <i className="bi bi-person-circle"></i>
              </p>
              <input
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                type="text"
                placeholder="Enter username"
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
            <S.ForgotPassword>
              <Link to="/resetpassword">Forgot Password?</Link>
            </S.ForgotPassword>
            <S.SignInBtn className="sign-in-btn">Sign in</S.SignInBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
