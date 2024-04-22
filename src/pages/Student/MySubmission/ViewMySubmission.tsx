import React, { useEffect, useState } from "react";
import * as S from "./ViewMySubmission.styled";
// import Dropdown from "../../../components/Dropdown/Dropdown";
import Card from "../../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchAllContributions } from "../../../store/slices/Student/contribution";
import Pagination from "../../../components/Pagination/Pagination";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

// const dropdownItems = [{ value: "Lastest" }, { value: "Oldest" }];
// const title = "Sort";

const ViewMySubmission = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllContributions());
  }, []);

  const { allMyContributions, isLoading } = useSelector(
    (state: RootState) => state.contributionState,
  );

  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  const navigate = useNavigate();
  const navigateContributionDetail = (id: string) => navigate(`${id}`);

  useEffect(() => {
    setPage((prevPage) =>
      Math.min(Math.max(prevPage, 0), allMyContributions.length - 1),
    );
    setTotalPage(allMyContributions.length);
  }, [page, allMyContributions.length]);

  return (
    <>
      <S.Layout>
        <S.Container>
          <S.Block1>
            <div>
              <h1>Your Submission</h1>
              <p>
                Enter your submission title and also some necessary files that
                come with your submission.
              </p>
            </div>
          </S.Block1>
          <S.Block3>
            <S.Block3Title>My Submission List</S.Block3Title>
            <S.Block3Top>
              <S.Block3TopLeft>
              </S.Block3TopLeft>
              <S.Block3TopRight>
                <NavLink to={"/createsubmission"}>
                  <button>Add new submission</button>
                </NavLink>
              </S.Block3TopRight>
            </S.Block3Top>
            {isLoading ? (
              <Loader />
            ) : allMyContributions && allMyContributions[page] ? (
              <S.Block3SubmissionList>
                {allMyContributions[page].map((item, index) => (
                  <S.Block3SubmissionItemsContainer
                    key={index}
                    onClick={() => navigateContributionDetail(item.id!)}
                  >
                    <Card
                      imgUrl={
                        item.Image.length > 0
                          ? item.Image[0].path
                          : "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius"
                      }
                      cardTitle={item.title}
                    />
                  </S.Block3SubmissionItemsContainer>
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
              </S.Block3SubmissionList>
            ) : (
              <S.EmtyItemText>There is no available contribution</S.EmtyItemText>
            )}
          </S.Block3>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default ViewMySubmission;
