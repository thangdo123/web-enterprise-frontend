import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";

export default function Table() {
  const { accounts } = useSelector((state: RootState) => state.accountState);
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setPage((prevPage) =>
      Math.min(Math.max(prevPage, 0), accounts.account.length - 1),
    );
    setTotalPage(accounts.account.length);
  }, [page, accounts.account.length]);

  return (
    <S.TableContainer>
      {accounts.account && accounts.account[page] && (
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
              {accounts.account[page].map((innerAccounts, index) => (
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

          {totalPage && (
            <Pagination
              totalPage={totalPage}
              nextPage={() => setPage(page + 1)}
              prevPage={() => setPage(page - 1)}
            />
          )}
        </>
      )}
    </S.TableContainer>
  );
}
