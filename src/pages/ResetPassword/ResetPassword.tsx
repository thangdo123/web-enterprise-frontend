import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./ResetPassword.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { resetPassword, sendOtp } from "../../store/slices/resetPassword";
import { useLocation, useNavigate } from "react-router";
import { deleteCookie } from "../../utils/cookies.utils";

export default function Login() {
  const [time, setTime] = useState<number>(300);
  const [mailInput, setMailInput] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [newPW, setNewPW] = useState<string>("");
  const [reNewPW, setReNewPW] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { isSentOtp, checkOtp } = useSelector(
    (state: RootState) => state.resetPasswordState,
  );

  const handleShow = () => {
    setTime(300);
  };

  const handleResendCode = () => {
    setTime(300);
    dispatch(sendOtp({ email: mailInput }));
  };

  const handleTime = (time: number) => {
    if (time > 60) {
      const minute = Math.floor(time / 60);
      const second = time - minute * 60;
      if (second < 10) {
        return minute + ":0" + second;
      }
      return minute + ":" + second;
    } else {
      if (time < 10) {
        return "00:0" + time;
      }
      return "00:" + time;
    }
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

  useEffect(() => {
    if (location.state) {
      setMailInput(location.state.email);
    } else {
      setMailInput("");
    }
  }, [location.state]);

  useEffect(() => {
    if (checkOtp === true) {
      deleteCookie("token");
      navigate("/login");
    }
  }, [checkOtp]);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleShow();
    if (isSentOtp) {
      const newPassword = {
        email: mailInput,
        otp: otp,
        newPassword: newPW,
        reNewPassword: reNewPW,
      };
      dispatch(resetPassword(newPassword));
    } else {
      dispatch(sendOtp({ email: mailInput }));
    }
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
              {!isSentOtp && (
                <input
                  value={mailInput}
                  onChange={(e) => setMailInput(e.target.value)}
                  type="email"
                  placeholder="enter your email for the reset code"
                  required
                />
              )}
              {isSentOtp && (
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="enter your OTP code"
                  required
                />
              )}
              <S.TimeContainer $show={isSentOtp}>
                {handleTime(time)}
              </S.TimeContainer>
            </S.InputField>
            {isSentOtp && (
              <S.InputField>
                <p>
                  <i className="bi bi-key"></i>
                </p>

                <input
                  value={newPW}
                  onChange={(e) => setNewPW(e.target.value)}
                  type="password"
                  placeholder="enter your new password"
                  required
                />
              </S.InputField>
            )}
            {isSentOtp && (
              <S.InputField>
                <p>
                  <i className="bi bi-key"></i>
                </p>

                <input
                  value={reNewPW}
                  onChange={(e) => setReNewPW(e.target.value)}
                  type="password"
                  placeholder="Confirm your new password"
                  required
                />
              </S.InputField>
            )}
            <S.Btn $show={isSentOtp}>Send code</S.Btn>
            <S.SendBtn $show={isSentOtp}>Submit</S.SendBtn>
            <S.ResendBtn
              type="button"
              onClick={handleResendCode}
              $show={isSentOtp}
            >
              Resend code
            </S.ResendBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
