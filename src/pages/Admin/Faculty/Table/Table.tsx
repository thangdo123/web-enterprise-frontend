import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import Pagination from "../../../../components/Pagination/Pagination";
import { deleteFacultyById } from "../../../../store/slices/faculties";

export default function Table() {
  const { allFaculties } = useSelector(
    (state: RootState) => state.facultyState,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    setPage((prevPage) =>
      Math.min(Math.max(prevPage, 0), allFaculties.length - 1),
    );
    setTotalPage(allFaculties.length);
  }, [page, allFaculties.length]);

  return (
    <S.TableContainer>
      {allFaculties && allFaculties[page] && (
        <>
          <S.Table>
            <thead>
              <S.TableHeadRow>
                <S.TableHeadItem>Name</S.TableHeadItem>
                <S.TableHeadItem>Created at</S.TableHeadItem>
                <S.TableHeadItem>Actions</S.TableHeadItem>
              </S.TableHeadRow>
            </thead>
            <tbody>
              {allFaculties[page].map((innerFaculties, index) => (
                <React.Fragment key={index}>
                  <S.TableRow>
                    <S.TableItem>{innerFaculties.name}</S.TableItem>
                    <S.TableItem>{innerFaculties.createAt}</S.TableItem>
                    <S.TableItem>
                      <S.ActionItemContainer>
                        <S.ActionTitle>Edit</S.ActionTitle>
                        <S.ActionTitle
                          onClick={() =>
                            dispatch(deleteFacultyById(innerFaculties.id))
                          }
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

          {totalPage && (
            <Pagination
              changePage={setPage}
              currentPage={page}
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
