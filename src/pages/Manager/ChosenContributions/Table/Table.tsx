import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";
import { IChosenContribution } from "../../../../interfaces/chosenContribution";

interface ITableProps {
  handlePopupDetail: () => void;
  handleChosenContribution: (chosenContribution: IChosenContribution) => void;
}

export default function Table({
  handlePopupDetail,
  handleChosenContribution,
}: ITableProps) {
  const { allChosenContributions } = useSelector(
    (state: RootState) => state.chosenContributionState,
  );
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    setPage((prevPage) =>
      Math.min(Math.max(prevPage, 0), allChosenContributions.length - 1),
    );
    setTotalPage(allChosenContributions.length);
  }, [page, allChosenContributions.length]);

  return (
    <S.TableContainer>
      {allChosenContributions && allChosenContributions[page] && (
        <>
          <S.Container>
            <S.Table>
              <thead>
                <S.TableHeadRow>
                  <S.TableHeadItem>Title</S.TableHeadItem>
                  <S.TableHeadItem>Contributor Name</S.TableHeadItem>
                  <S.TableHeadItem>Faculty</S.TableHeadItem>
                  <S.TableHeadItem>Publish Status</S.TableHeadItem>
                  <S.TableHeadItem>Actions</S.TableHeadItem>
                </S.TableHeadRow>
              </thead>
              <tbody>
                {allChosenContributions[page].map(
                  (chosenContribution, index) => (
                    <React.Fragment key={index}>
                      <S.TableRow>
                        <S.TableItem>{chosenContribution.title}</S.TableItem>
                        <S.TableItem>
                          {chosenContribution.user.name}
                        </S.TableItem>
                        <S.TableItem>
                          {chosenContribution.user.Faculty.name}
                        </S.TableItem>
                        <S.TableItem>
                          {chosenContribution.is_public
                            ? "Published"
                            : "Not Published"}
                        </S.TableItem>
                        <S.TableItem>
                          <S.ActionItemContainer>
                            <S.ActionTitle
                              onClick={() => {
                                handlePopupDetail();
                                handleChosenContribution(chosenContribution);
                              }}
                            >
                              Detail
                            </S.ActionTitle>
                          </S.ActionItemContainer>
                        </S.TableItem>
                      </S.TableRow>
                    </React.Fragment>
                  ),
                )}
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
