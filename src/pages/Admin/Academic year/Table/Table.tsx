import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";
import { deleteAcademicYearById } from "../../../../store/slices/Admin/academicYear";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

interface ITableProps {
  handleEdit: () => void;
  handleSelectedClosureDate: (date: string) => void;
  handleSelectedFinalClosureDate: (date: string) => void;
  handleSelectedAcademicYearId: (id: string) => void;
}

export default function Table({
  handleEdit,
  handleSelectedAcademicYearId,
  handleSelectedClosureDate,
  handleSelectedFinalClosureDate,
}: ITableProps) {
  const { allAcademicYears } = useSelector(
    (state: RootState) => state.academicYearsState,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (allAcademicYears && allAcademicYears.length > 0) {
      setPage((prevPage) =>
        Math.min(Math.max(prevPage, 0), allAcademicYears.length - 1),
      );
      setTotalPage(allAcademicYears.length);
    }
  }, [page, allAcademicYears]);

  return (
    <S.TableContainer>
      {allAcademicYears && allAcademicYears[page] && (
        <>
          <S.Container>
            <S.Table>
              <thead>
                <S.TableHeadRow>
                  <S.TableHeadItem>Year</S.TableHeadItem>
                  <S.TableHeadItem>Closure Date</S.TableHeadItem>
                  <S.TableHeadItem>Final Closure Date</S.TableHeadItem>
                  <S.TableHeadItem>Actions</S.TableHeadItem>
                </S.TableHeadRow>
              </thead>
              <tbody>
                {allAcademicYears[page].map((academicYear, index) => (
                  <React.Fragment key={index}>
                    <S.TableRow>
                      <S.TableItem>
                        {academicYear.final_closure_date.slice(0, 4)}
                      </S.TableItem>
                      <S.TableItem>{academicYear.closure_date}</S.TableItem>
                      <S.TableItem>
                        {academicYear.final_closure_date}
                      </S.TableItem>
                      <S.TableItem>
                        <S.ActionItemContainer>
                          <S.ActionTitle
                            onClick={() => {
                              handleEdit();
                              handleSelectedAcademicYearId(academicYear.id);
                              handleSelectedClosureDate(
                                academicYear.closure_date,
                              );
                              handleSelectedFinalClosureDate(
                                academicYear.final_closure_date,
                              );
                            }}
                          >
                            Edit
                          </S.ActionTitle>
                          <S.ActionTitle
                            onClick={() => {
                              dispatch(deleteAcademicYearById(academicYear.id));
                              dispatch(
                                setNotification({
                                  message:
                                    "Academic year is deleted successfully",
                                  type: ENotificationType.Success,
                                }),
                              );
                            }}
                          >
                            Delete
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
