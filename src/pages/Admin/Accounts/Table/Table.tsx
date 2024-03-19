import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";
import { IAccount } from "../../../../interfaces/account.interfaces";

export default function Table() {
  const { accounts } = useSelector((state: RootState) => state.accountState);
  const [listOfAccounts, setListOfAccounts] = useState<IAccount[][]>();
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (accounts.account) {
      console.log(accounts.account);
      setListOfAccounts(accounts.account);
      setTotalPage(accounts.account.length);
    }
    if (page < 0) setPage(0);
    if (page >= accounts.account.length) setPage(accounts.account.length - 1);
  }, [accounts, page]);

  return (
    <S.TableContainer>
      {listOfAccounts && listOfAccounts[page] && (
        <>
          <S.Table>
            <thead>
              <S.TableHeadRow>
                <S.TableHeadItem>Username</S.TableHeadItem>
                <S.TableHeadItem>Email</S.TableHeadItem>
                <S.TableHeadItem>Role</S.TableHeadItem>
                <S.TableHeadItem>Created at</S.TableHeadItem>
                <S.TableHeadItem>Actions</S.TableHeadItem>
              </S.TableHeadRow>
            </thead>
            <tbody>
              {listOfAccounts[page].map((innerAccounts, index) => (
                <React.Fragment key={index}>
                  <S.TableRow>
                    <S.TableItem>{innerAccounts.name}</S.TableItem>
                    <S.TableItem>{innerAccounts.email}</S.TableItem>
                    <S.TableItem>{innerAccounts.role}</S.TableItem>
                    <S.TableItem>{innerAccounts.createAt}</S.TableItem>
                    <S.TableItem>
                      <S.ActionItemContainer>
                        <S.ActionTitle>Edit</S.ActionTitle>
                        <S.ActionTitle>Delete</S.ActionTitle>
                      </S.ActionItemContainer>
                    </S.TableItem>
                  </S.TableRow>
                </React.Fragment>
              ))}
            </tbody>
          </S.Table>

          <Pagination
            totalPage={totalPage!}
            nextPage={() => setPage(page + 1)}
            prevPage={() => setPage(page - 1)}
          />
        </>
      )}
    </S.TableContainer>
  );
}
