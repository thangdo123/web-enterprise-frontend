import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./UpdateAccount.Styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { updateAccountById } from "../../../../store/slices/Admin/accounts";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

interface IAccountUpdateProps {
  onClose: () => void;
  accountInput: string;
  accountId: string;
  accountIsLocked: boolean;
}

const UpdateAccount = ({
  onClose,
  accountInput,
  accountId,
  accountIsLocked,
}: IAccountUpdateProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [nameInput, setNameInput] = useState<string>(accountInput);
  const [isLocked, setIsLocked] = useState<boolean>(accountIsLocked);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
    console.log(isLocked);
    const selectedAccount = {
      Id: accountId,
      name: nameInput,
      is_locked: isLocked,
    };
    dispatch(updateAccountById(selectedAccount))
      .unwrap()
      .then((action) => {
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
  };

  const handleToggleLockStatus = () => setIsLocked(!isLocked);

  useEffect(() => {
    setNameInput(accountInput);
    setIsLocked(accountIsLocked);
  }, [accountInput, accountIsLocked]);

  return (
    <S.CreateAccountLayout>
      <S.CreateAccountContainer onSubmit={handleOnSubmit}>
        <S.CreateAccountBlock1>
          <S.CreateAccountLeftTitle>Username:</S.CreateAccountLeftTitle>
          <S.CreateAccountBlock1Right>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </S.CreateAccountBlock1Right>
        </S.CreateAccountBlock1>

        <S.CreateAccountBlock1>
          <S.CreateAccountLeftTitle>Lock Status:</S.CreateAccountLeftTitle>
          <S.ToggleBtn
            $isSelected={isLocked}
            onClick={handleToggleLockStatus}
          />
        </S.CreateAccountBlock1>

        <S.BottomBtn>
          <div>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.CancelBtn type="button" onClick={onClose}>
              Cancel
            </S.CancelBtn>
          </div>
        </S.BottomBtn>
      </S.CreateAccountContainer>
    </S.CreateAccountLayout>
  );
};

export default UpdateAccount;
