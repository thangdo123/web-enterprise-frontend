import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";

interface ITableProps {
  handleEdit: () => void;
  handleSelectedAccountName: (name: string) => void;
  handleSelectedAccountId: (id: string) => void;
  handleSelectedAccountIsLocked: (status: boolean) => void;
}

export default function Table({
  handleEdit,
  handleSelectedAccountId,
  handleSelectedAccountIsLocked,
  handleSelectedAccountName,
}: ITableProps) {
  const { account } = useSelector((state: RootState) => state.accountState);
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (account && account.length > 0) {
      setPage((prevPage) =>
        Math.min(Math.max(prevPage, 0), account.length - 1),
      );
      setTotalPage(account.length);
    }
  }, [page, account]);
  return (
    <S.TableContainer>
      {account && account[page] && (
        <>
          <S.Container>
            <S.Table>
              <thead>
                <S.TableHeadRow>
                  <S.TableHeadItem>Username</S.TableHeadItem>
                  <S.TableHeadItem>Email</S.TableHeadItem>
                  <S.TableHeadItem>Role</S.TableHeadItem>
                  <S.TableHeadItem>Lock Status</S.TableHeadItem>
                  <S.TableHeadItem>Actions</S.TableHeadItem>
                </S.TableHeadRow>
              </thead>
              <tbody>
                {account[page].map((innerAccounts, index) => (
                  <React.Fragment key={index}>
                    <S.TableRow>
                      <S.TableItem>{innerAccounts.name}</S.TableItem>
                      <S.TableItem>{innerAccounts.email}</S.TableItem>
                      <S.TableItem>{innerAccounts.role}</S.TableItem>
                      <S.TableItem>
                        {innerAccounts.is_locked ? "Locked" : "Not Locked"}
                      </S.TableItem>
                      <S.TableItem>
                        <S.ActionItemContainer>
                          <S.ActionTitle
                            onClick={() => {
                              handleEdit();
                              handleSelectedAccountId(innerAccounts.id!);
                              handleSelectedAccountIsLocked(
                                innerAccounts.is_locked!,
                              );
                              handleSelectedAccountName(innerAccounts.name);
                            }}
                          >
                            Edit
                          </S.ActionTitle>
                        </S.ActionItemContainer>
                      </S.TableItem>
                    </S.TableRow>
                  </React.Fragment>
                ))}
              </tbody>
            </S.Table>
          </S.Container>

          {totalPage && (
            <S.PaginationContainer>
              <Pagination
                changePage={setPage}
                currentPage={page}
                totalPage={totalPage}
                nextPage={() => setPage(page + 1)}
                prevPage={() => setPage(page - 1)}
              />
            </S.PaginationContainer>
          )}
        </>
      )}
    </S.TableContainer>
  );
}
