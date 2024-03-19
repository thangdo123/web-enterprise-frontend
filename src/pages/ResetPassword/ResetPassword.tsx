import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./ResetPassword.styled";

export default function Login() {
  const [time, setTime] = useState<number>(60);
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
    setTime(60);
  };

  const handleResendCode = () => {
    setTime(60);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
      if (time === 0) {
        setTime(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
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
              <p>Reset Password</p>
            </S.LoginFieldText>
            <S.InputField>
              <p>
                <i className="bi bi-envelope"></i>
              </p>
              <input
                type={show ? "text" : "email"}
                placeholder={
                  show
                    ? "enter your OTP code"
                    : "enter your email for the reset code"
                }
                required
              />
              <S.TimeContainer $show={show}>{time}</S.TimeContainer>
            </S.InputField>
            <S.Btn $show={show} onClick={handleShow} className="sign-in-btn">
              Send code
            </S.Btn>
            <S.SendBtn $show={show} className="sign-in-btn">
              Submit
            </S.SendBtn>
            <S.ResendBtn
              onClick={handleResendCode}
              $show={show}
              className="sign-in-btn"
            >
              Resend code
            </S.ResendBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
