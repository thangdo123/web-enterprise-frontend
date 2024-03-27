import React, { FormEvent, useState } from "react";
import * as S from "./CreateAccount.Styled";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { createAccount } from "../../../../store/slices/accounts";
import { IAccount } from "../../../../interfaces/account.interfaces";

const CreateAccount = ({ onClose }: { onClose: () => void }) => {
  // const [visible, setvisible] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [faculty, setFaculty] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(role);
    const newAccount: IAccount = {
      name: name,
      email: email,
      role: role.toUpperCase(),
      faculty: "3ec5e1fd-55e8-458b-84cd-a8b633f94b18",
    };
    onClose();
    dispatch(createAccount(newAccount));
  };

  const dropDownItems = [
    { value: "Student" },
    { value: "Manager" },
    { value: "Coordionator" },
  ];
  const title = "Role";
  return (
    <S.CreateAccountLayout>
      <S.CreateAccountContainer onSubmit={handleOnSubmit}>
        <S.CreateAccountBlock1>
          <S.CreateAccountLeftTitle>Username:</S.CreateAccountLeftTitle>
          <S.CreateAccountBlock1Right>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </S.CreateAccountBlock1Right>
        </S.CreateAccountBlock1>
        <S.CreateAccountBlock1>
          <S.CreateAccountLeftTitle>Email:</S.CreateAccountLeftTitle>
          <S.CreateAccountBlock1Right>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </S.CreateAccountBlock1Right>
        </S.CreateAccountBlock1>
        {/* <S.CreateAccountBlock2>
          <S.CreateAccountLeftTitle>Password:</S.CreateAccountLeftTitle>
          <S.CreateAccountBlock2Right>
            <S.EnterPasswordField
              type={visible ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
            />
            <S.HidePasswordBtn onClick={() => setvisible(!visible)}>
              {visible ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </S.HidePasswordBtn>
          </S.CreateAccountBlock2Right>
        </S.CreateAccountBlock2> */}
        <S.CreateAccountBlock3>
          <S.CreateAccountLeftTitle>Role:</S.CreateAccountLeftTitle>
          <Dropdown
            onClick={setRole}
            title={title}
            optionList={dropDownItems}
          />
        </S.CreateAccountBlock3>
        {role === "Student" || role === "Coordionator" ? (
          <S.CreateAccountBlock1>
            <S.CreateAccountLeftTitle>Faculty:</S.CreateAccountLeftTitle>
            <S.CreateAccountBlock1Right>
              <input
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                placeholder="Enter Faculty"
                required
              />
            </S.CreateAccountBlock1Right>
          </S.CreateAccountBlock1>
        ) : null}
        <S.BottomBtn>
          <div>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.CancelBtn onClick={onClose}>Cancel</S.CancelBtn>
          </div>
        </S.BottomBtn>
      </S.CreateAccountContainer>
    </S.CreateAccountLayout>
  );
};

export default CreateAccount;
