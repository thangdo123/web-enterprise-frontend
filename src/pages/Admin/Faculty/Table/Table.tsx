import React, { useEffect, useState } from "react";
import * as S from "./Table.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { IFaculty } from "../../../../interfaces/faculty.interfaces";
import Pagination from "../../../../components/Pagination/Pagination";

export default function Table() {
  const { allFaculties } = useSelector(
    (state: RootState) => state.facultyState,
  );
  const [listOfFaculties, setListOfFaculties] = useState<IFaculty[][]>();
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (allFaculties) {
      setListOfFaculties(allFaculties);
      setTotalPage(allFaculties.length);
    }
    if (page < 0) setPage(0);
    if (page >= allFaculties.length) setPage(allFaculties.length - 1);
  }, [allFaculties, page]);
  return (
    <S.TableContainer>
      {listOfFaculties && listOfFaculties[page] && (
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
              {listOfFaculties[page].map((innerFaculties, index) => (
                <React.Fragment key={index}>
                  <S.TableRow>
                    <S.TableItem>{innerFaculties.name}</S.TableItem>
                    <S.TableItem>{innerFaculties.createAt}</S.TableItem>
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
