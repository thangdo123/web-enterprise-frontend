import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./ResetPassword.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  clearCheckOtp,
  resetPassword,
  sendOtp,
} from "../../store/slices/resetPassword";
import { useLocation, useNavigate } from "react-router";
import { deleteCookie } from "../../utils/cookies.utils";
import Logo from "../../assets/images/gw-logo.png";
import { setNotification } from "../../store/slices/notification";
import { ENotificationType } from "../../enum";
import { CapsLockOn, ValidatePassword } from "../../utils/validate.utils";

export default function ResetPassword() {
  const [capsLockStatus, setCapsLockStatus] = useState<boolean>(false);
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
    console.log(mailInput);
    dispatch(sendOtp({ email: mailInput }))
      .unwrap()
      .then((action) => {
        setTime(300);
        dispatch(
          setNotification({
            message: action.message,
            type: ENotificationType.Success,
          }),
        );
      })
      .catch((rejectedValueOrSerializedError) => {
        dispatch(
          setNotification({
            message: rejectedValueOrSerializedError.response.data.message,
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
    if (checkOtp) {
      deleteCookie("token");
      navigate("/login");
      dispatch(clearCheckOtp());
    }
  }, [checkOtp]);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSentOtp) {
      const newPassword = {
        email: mailInput,
        otp: otp,
        newPassword: newPW,
        reNewPassword: reNewPW,
      };
      dispatch(resetPassword(newPassword))
        .unwrap()
        .then((action) => {
          dispatch(
            setNotification({
              message: action.message,
              type: ENotificationType.Success,
            }),
          );
        })
        .catch((rejectedValueOrSerializedError) => {
          dispatch(
            setNotification({
              message:
                rejectedValueOrSerializedError.response.data.message ||
                rejectedValueOrSerializedError.response.data.errors[0].msg,
              type: ENotificationType.Error,
            }),
          );
        });
    } else {
      handleShow();
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
        .catch((rejectedValueOrSerializedError) => {
          dispatch(
            setNotification({
              message: rejectedValueOrSerializedError.response.data.message,
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
            {isSentOtp && (
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
