import React, { useEffect, useState } from "react";
import * as S from "./GuestHomepage.styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  fetchAllGuestFaculty,
  fetchAllPublishedContributionInFaculty,
} from "../../store/slices/Guest/guest";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router";

const GuestHomepage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { faculties, allPublicContributions, isLoading } = useSelector(
    (state: RootState) => state.guestState,
  );
  useEffect(() => {
    dispatch(fetchAllGuestFaculty());
  }, []);
  const [facultyId, setFacultyId] = useState<string>("");

  useEffect(() => {
    dispatch(fetchAllPublishedContributionInFaculty(facultyId));
  }, [facultyId]);

  const navigate = useNavigate();
  const navigateToContributionDetail = (id: string) => {
    navigate(`${id}`);
  };

  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    if (allPublicContributions) {
      setPage((prevPage) =>
        Math.min(Math.max(prevPage, 0), allPublicContributions.length - 1),
      );
      setTotalPage(allPublicContributions.length);
    }
  }, [page, allPublicContributions]);
  return (
    <S.Layout>
      <S.Container>
        <S.Block1>
          <S.Block1Title>
            All Published Contributions in Specific Faculty
          </S.Block1Title>
          <S.Block1Description>
            Here you can see all the selected contributions that have been
            chosen by manager in this academic year.
          </S.Block1Description>
        </S.Block1>
        <S.Block2>
          <S.Block2LeftTitle>All Published Contributions</S.Block2LeftTitle>
          <S.Block2Right>
            <S.Block2RightText>Faculty: </S.Block2RightText>
            <S.Block2DropDown>
              {faculties && (
                <Dropdown
                  title={"Faculty"}
                  onClick={(option) => {
                    setFacultyId(option.id!);
                    console.log(facultyId);
                  }}
                  optionList={faculties}
                />
              )}
            </S.Block2DropDown>
          </S.Block2Right>
        </S.Block2>

        {facultyId === "" ? (
          <S.Block3IfNoSelection>
            Please select a faculty on the top-right Dropdown
          </S.Block3IfNoSelection>
        ) : isLoading ? (
          <Loader />
        ) : allPublicContributions && allPublicContributions[page] ? (
          <S.Block3>
            {allPublicContributions[page].map((value, index) => (
              <S.Block3Items
                key={index}
                onClick={() => navigateToContributionDetail(value.id)}
              >
                <S.Block3ItemImg
                  src={
                    value.Image[0]
                      ? value.Image[0].path
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsAoBnqOB3DiQ0fYhkFT5PNPtPXYOGTRZ13i9DLellg&s"
                  }
                />
                <S.Block3ItemBottom>
                  <S.Block3ItemTitle>Title: {value.title}</S.Block3ItemTitle>
                  <S.Block3ItemAuthor>
                    Author: {value.user.name}
                  </S.Block3ItemAuthor>
                </S.Block3ItemBottom>
              </S.Block3Items>
            ))}
            {totalPage && (
              <Pagination
                changePage={setPage}
                currentPage={page}
                totalPage={totalPage}
                nextPage={() => setPage(page + 1)}
                prevPage={() => setPage(page - 1)}
              />
            )}
          </S.Block3>
        ) : (
          <S.Block3ItemsIfEmptyArr>
            There is no published contribution found in this faculty
          </S.Block3ItemsIfEmptyArr>
        )}

        {/* <S.Block3>
          <S.Block3Items>
            <S.Block3ItemImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsAoBnqOB3DiQ0fYhkFT5PNPtPXYOGTRZ13i9DLellg&s" />
            <S.Block3ItemBottom>
              <S.Block3ItemTitle>Title: asdasd</S.Block3ItemTitle>
              <S.Block3ItemAuthor>Author: ibriergreg</S.Block3ItemAuthor>
            </S.Block3ItemBottom>
          </S.Block3Items>
        </S.Block3> */}
      </S.Container>
    </S.Layout>
  );
};

export default GuestHomepage;
