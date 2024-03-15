import React from "react";
import * as S from "./Login.styled";
import {Link} from "react-router-dom";

export default function Login() {
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
          <S.LoginFieldContainer>
            <S.LoginFieldText>
              <p>Login</p>
            </S.LoginFieldText>
            <S.InputField>
              <p>
                <i className="bi bi-person-circle"></i>
              </p>
              <input type="text" placeholder="Enter username" />
            </S.InputField>
            <S.InputField>
              <p>
                <i className="bi bi-shield-lock-fill"></i>
              </p>
              <input type="text" placeholder="Enter password" />
            </S.InputField>
            <S.ForgotPassword><Link to="/resetpassword">Forgot Password?</Link></S.ForgotPassword>
            <S.SignInBtn className="sign-in-btn">Sign in</S.SignInBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
