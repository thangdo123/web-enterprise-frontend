import React, { useEffect } from "react";
import * as S from "./Table.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { fetchAllFaculties } from "../../../../store/slices/faculties";

export default function Table() {
  const dispatch = useDispatch<AppDispatch>();
  // const { accounts } = useSelector((state: RootState) => state.accountState);

  useEffect(() => {
    dispatch(fetchAllFaculties());
  }, [dispatch]); // Dispatch action only once when component mounts

  // const listAccount = Object.entries(accounts);

  return (
    <S.Table>
      <S.TableHeadRow>
        <S.TableHeadItem>Username</S.TableHeadItem>
        <S.TableHeadItem>Email</S.TableHeadItem>
        <S.TableHeadItem>Role</S.TableHeadItem>
        <S.TableHeadItem>Created at</S.TableHeadItem>
        <S.TableHeadItem>Actions</S.TableHeadItem>
      </S.TableHeadRow>

      {/* {listAccount.map((innerAccounts, index) => (
        <React.Fragment key={index}>
          {innerAccounts[1].map((account, innerIndex) => (
            <React.Fragment key={innerIndex}>
              {account.map((key, itemIndex) => (
                <S.TableRow key={itemIndex}>
                  <S.TableItem>{key.name}</S.TableItem>
                  <S.TableItem>{key.email}</S.TableItem>
                  <S.TableItem>{key.role}</S.TableItem>
                  <S.TableItem>{key.createAt}</S.TableItem>
                  <S.TableItem>
                    <S.ActionItemContainer>
                      <S.ActionTitle>Edit</S.ActionTitle>
                      <S.ActionTitle>Delete</S.ActionTitle>
                    </S.ActionItemContainer>
                  </S.TableItem>
                </S.TableRow>
              ))}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))} */}
    </S.Table>
  );
}
