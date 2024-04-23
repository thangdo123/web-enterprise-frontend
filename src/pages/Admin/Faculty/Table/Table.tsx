import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";
import { deleteFacultyById } from "../../../../store/slices/Admin/faculties";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

interface ITableProps {
  handleEdit: () => void;
  handleSelectedFacultyName: (name: string) => void;
  handleSelectedFacultyId: (id: string) => void;
}

export default function Table({
  handleEdit,
  handleSelectedFacultyId,
  handleSelectedFacultyName,
}: ITableProps) {
  const { allFaculties } = useSelector(
    (state: RootState) => state.facultyState,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    if (allFaculties && allFaculties.length > 0) {
      setPage((prevPage) =>
        Math.min(Math.max(prevPage, 0), allFaculties.length - 1),
      );
      setTotalPage(allFaculties.length);
    }
  }, [page, allFaculties]);

  return (
    <S.TableContainer>
      {allFaculties && allFaculties[page] && (
        <>
          <S.Container>
            <S.Table>
              <thead>
                <S.TableHeadRow>
                  <S.TableHeadItem>Name</S.TableHeadItem>
                  <S.TableHeadItem>Created at</S.TableHeadItem>
                  <S.TableHeadItem>Actions</S.TableHeadItem>
                </S.TableHeadRow>
              </thead>
              <tbody>
                {allFaculties[page].map((faculty, index) => (
                  <React.Fragment key={index}>
                    <S.TableRow>
                      <S.TableItem>{faculty.name}</S.TableItem>
                      <S.TableItem>{faculty.createAt}</S.TableItem>
                      <S.TableItem>
                        <S.ActionItemContainer>
                          <S.ActionTitle
                            onClick={() => {
                              handleEdit();
                              handleSelectedFacultyId(faculty.id);
                              handleSelectedFacultyName(faculty.name);
                            }}
                          >
                            Edit
                          </S.ActionTitle>
                          <S.ActionTitle
                            onClick={() => {
                              dispatch(deleteFacultyById(faculty.id));
                              dispatch(
                                setNotification({
                                  message: "Faculty is deleted successfully",
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
