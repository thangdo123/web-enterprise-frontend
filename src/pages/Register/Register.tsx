import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./Register.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { IRegister } from "../../interfaces";
import { clearAuthStatus, registerAsGuest } from "../../store/slices/register";
import { setNotification } from "../../store/slices/notification";
import { ENotificationType } from "../../enum";
import { useNavigate } from "react-router";

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const { authStatus } = useSelector((state: RootState) => state.registerState);
  const navigate = useNavigate();

  const handleRegister = () => {
    const account: IRegister = {
      name: nameInput,
      email: emailInput,
      avatar: "",
    };
    dispatch(registerAsGuest(account))
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
  };

  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleRegister();
  };

  useEffect(() => {
    if (authStatus) {
      navigate("/login");
      dispatch(clearAuthStatus());
    }
  }, [authStatus]);

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
              <p>Register as Guest</p>
            </S.LoginFieldText>
            <S.InputField>
              <p>
                <i className="bi bi-person-circle"></i>
              </p>
              <input
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                type="text"
                placeholder="Enter username"
                required
              />
            </S.InputField>
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
            <S.SignInBtn className="sign-in-btn">Submit</S.SignInBtn>
          </S.LoginFieldContainer>
        </S.LoginField>
      </S.LoginCenter>
    </S.LoginContainter>
  );
}
