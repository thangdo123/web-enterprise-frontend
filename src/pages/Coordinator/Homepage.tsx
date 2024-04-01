import React, { useEffect, useState } from "react";
import * as S from "./Homepage.styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchAllContributionsByFaculty } from "../../store/slices/Coordinator/coodinatorContribution";
import { Loader } from "../../components/Loader/Loader.styled";
import Pagination from "../../components/Pagination/Pagination";

const dropdownItems = [{ value: "Lastest" }, { value: "Oldest" }];
const dropdownTitle = "Sort";

const Homepage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllContributionsByFaculty());
  }, []);
  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  const { contribution } = useSelector(
    (state: RootState) => state.coordinatorContributionState,
  );

  useEffect(() => {
    setPage((prevPage) =>
      Math.min(Math.max(prevPage, 0), contribution.length - 1),
    );
    setTotalPage(contribution.length);
  }, [page, contribution.length]);
  console.log(contribution);
  return (
    <S.Layout>
      <S.Container>
        <S.Block1>
          <S.Block1Title>Available Submissions</S.Block1Title>
          <S.Block1Desciption>
            Here you can view all the submissions that the students have
            submitted and also interact with them
          </S.Block1Desciption>
        </S.Block1>
        <S.Block2>
          <S.Block2Left>
            <Dropdown
              title={dropdownTitle}
              optionList={dropdownItems}
              onClick={() => console.log("")}
            />
          </S.Block2Left>
          <S.Block2Right>
            Due Date: Thursday, 16 April 2023, 11:00 PM
          </S.Block2Right>
        </S.Block2>
        {contribution && contribution[page] ? (
          <S.Block3>
            {contribution[page].map((item, index) => (
              <S.Block3Items key={index}>
                <S.ItemImage src={item.Image.length > 0 ? item.Image[0].path : "https://static.boredpanda.com/blog/wp-content/uploads/2020/07/expressive-cat-nana-1-1-5f16cfece24f8__700.jpg"} />
                <S.ItemBottomBlock>
                  <S.ItemTitle>{item.title}</S.ItemTitle>
                  <S.ItemStatus>Suýt được chọn</S.ItemStatus>
                </S.ItemBottomBlock>
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
          <Loader />
        )}
      </S.Container>
    </S.Layout>
  );
};

export default Homepage;
