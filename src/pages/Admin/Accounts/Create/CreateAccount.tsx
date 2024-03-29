import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./CreateAccount.Styled";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { createAccount } from "../../../../store/slices/accounts";
import { IAccount } from "../../../../interfaces/account.interfaces";
import { fetchAllFaculties } from "../../../../store/slices/faculties";

const CreateAccount = ({ onClose }: { onClose: () => void }) => {
  // const [visible, setvisible] = useState(false);
  const { allFaculties } = useSelector(
    (state: RootState) => state.facultyState,
  );
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [faculty, setFaculty] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const dropDownItems = [
    { value: "Student" },
    { value: "Manager" },
    { value: "Coordionator" },
  ];
  const title = "Role";

  const dispatch = useDispatch<AppDispatch>();

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(role);
    const newAccount: IAccount = {
      name: name,
      email: email,
      role: role.toUpperCase(),
      faculty: faculty,
    };
    onClose();
    dispatch(createAccount(newAccount));
  };

  useEffect(() => {
    dispatch(fetchAllFaculties());
  }, []);

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

        <S.CreateAccountBlock3>
          <S.CreateAccountLeftTitle>Role:</S.CreateAccountLeftTitle>
          <Dropdown
            onClick={(option) => setRole(option.value!)}
            title={title}
            optionList={dropDownItems}
          />
        </S.CreateAccountBlock3>
        {role === "Student" || role === "Coordionator" ? (
          <S.CreateAccountBlock3>
            <S.CreateAccountLeftTitle>Faculties:</S.CreateAccountLeftTitle>
            <Dropdown
              onClick={(option) => setFaculty(option.id!)}
              title={title}
              optionList={allFaculties[0]}
            />
          </S.CreateAccountBlock3>
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
