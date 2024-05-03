import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./ResetPassword.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { resetPassword, sendOtp } from "../../store/slices/resetPassword";
import { useLocation, useNavigate } from "react-router";
import { deleteCookie } from "../../utils/cookies.utils";
import Logo from "../../assets/images/gw-logo.png";
import { setNotification } from "../../store/slices/notification";
import { ENotificationType } from "../../enum";
import { CapsLockOn, ValidatePassword } from "../../utils/validate.utils";

const TIMEOUT = 300;

export default function ResetPassword() {
  const dateTime = new Date();
  const now = Math.floor(dateTime.getTime() / 1000);
  const expiresTime = localStorage.getItem("expiresTime");
  const [capsLockStatus, setCapsLockStatus] = useState<boolean>(false);
  const [time, setTime] = useState<number>(parseInt(expiresTime!) - now);
  const [mailInput, setMailInput] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [newPW, setNewPW] = useState<string>("");
  const [reNewPW, setReNewPW] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const otpStatus = localStorage.getItem("isSentOtp") === "true";
  const userMail = localStorage.getItem("userMail");

  const handleShow = () => {
    localStorage.setItem("expiresTime", (now + TIMEOUT).toString());
    setTime(TIMEOUT);
  };

  const handleResendCode = () => {
    dispatch(sendOtp({ email: userMail! }))
      .unwrap()
      .then((action) =>
        dispatch(
          setNotification({
            message: action.message,
            type: ENotificationType.Success,
          }),
        ),
      )
      .then(() => handleShow())
      .catch((message) => {
        dispatch(
          setNotification({
            message: message,
            type: ENotificationType.Error,
          }),
        );
      });
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

    if (time <= 0) {
      setTime(0);
    }

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

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userMail", mailInput);
    if (otpStatus) {
      const newPassword = {
        email: userMail!,
        otp: otp,
        newPassword: newPW,
        reNewPassword: reNewPW,
      };
      dispatch(resetPassword(newPassword))
        .unwrap()
        .then((action) => {
          navigate("/login");
          deleteCookie("token");
          localStorage.setItem("isSentOtp", "false");
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
    } else {
      dispatch(sendOtp({ email: mailInput }))
        .unwrap()
        .then((action) => {
          dispatch(
            setNotification({
              message: action.message,
              type: ENotificationType.Success,
            }),
          );
        })
        .then(() => localStorage.setItem("isSentOtp", "true"))
        .then(() => handleShow())
        .catch((message) => {
          dispatch(
            setNotification({
              message: message,
              type: ENotificationType.Error,
            }),
          );
        });
    }
  };

  return (
    <S.LoginContainter>
      <S.LoginCenter>
        <div className="login-logo">
          <S.LoginLogoBanner>
            <S.LogoImg className="logo-img" src={Logo} alt="" />
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
              {!otpStatus && (
                <input
                  value={mailInput}
                  onChange={(e) => setMailInput(e.target.value)}
                  type="email"
                  placeholder="enter your email for the reset code"
                  required
                />
              )}
              {otpStatus && (
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="enter your OTP code"
                  required
                />
              )}
              <S.TimeContainer $show={otpStatus}>
                {handleTime(time)}
              </S.TimeContainer>
            </S.InputField>
            {otpStatus && (
              <S.InputField>
                <p>
                  <i className="bi bi-key"></i>
                </p>

                <input
                  value={newPW}
                  onChange={(e) => setNewPW(e.target.value)}
                  onKeyUp={(e) => setCapsLockStatus(CapsLockOn(e))}
                  type="password"
                  placeholder="enter your new password"
                  required
                />
                <S.CheckIcon $valid={ValidatePassword(newPW)}>
                  <i className="bi bi-check"></i>
                </S.CheckIcon>
              </S.InputField>
            )}
            {otpStatus && (
              <>
                <S.InputField>
                  <p>
                    <i className="bi bi-key"></i>
                  </p>

                  <input
                    value={reNewPW}
                    onChange={(e) => setReNewPW(e.target.value)}
                    type="password"
                    onKeyUp={(e) => setCapsLockStatus(CapsLockOn(e))}
                    placeholder="Confirm your new password"
                    required
                  />
                </S.InputField>
                <S.CapsLockStatus $show={capsLockStatus}>
                  Caps Lock is on
                </S.CapsLockStatus>
                <S.PasswordStatus $valid={ValidatePassword(newPW)}>
                  Password must have at least 8 characters and contain numbers,
                  lowercase letters, uppercase letters, and special characters.
                </S.PasswordStatus>
              </>
            )}
            <S.Btn $show={otpStatus}>Send code</S.Btn>
            <S.SendBtn $show={otpStatus}>Submit</S.SendBtn>
            <S.ResendBtn
              type="button"
              onClick={handleResendCode}
              $show={otpStatus}
            >
              Resend code
            </S.ResendBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
