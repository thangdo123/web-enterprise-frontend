import React, { useEffect, useState } from "react";
import * as S from "./Homepage.styled";
// import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import Carousels from "./Carousel/Carousels";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchPublishedContributions } from "../../store/slices/Student/contribution";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPublishedContributions());
  }, []);

  const { allChosenContribtution, isLoading } = useSelector(
    (state: RootState) => state.contributionState,
  );

  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    setPage((prevPage) =>
      Math.min(Math.max(prevPage, 0), allChosenContribtution.length - 1),
    );
    setTotalPage(allChosenContribtution.length);
  }, [page, allChosenContribtution.length]);

  return (
    <>
      <S.Navbar>
        <S.NavbarLeft>Greenwich Contributions</S.NavbarLeft>
        <S.NavbarLogo src="https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Truong-Dai-hoc-Greenwich-Viet-Nam-am-ban.png" />
        <S.NavbarRight>
          <S.LoginBtn as={Link} to={"/login"}>
            Login
          </S.LoginBtn>
        </S.NavbarRight>
      </S.Navbar>
      <S.Block1>
        <Carousels />
      </S.Block1>
      <S.BottomBlockLayout>
        <S.BottomBlockContainer>
          <S.Block2>
            <S.Block2Title>Selected Contributions</S.Block2Title>
            <S.Block2Description>
              Here you can see all the selected contributions that have been
              chosen by manager in this academic year.
            </S.Block2Description>
          </S.Block2>
          {isLoading ? (
            <Loader />
          ) : allChosenContribtution && allChosenContribtution[page] ? (
            <S.Block3>
              {allChosenContribtution[page].map((item, index) => (
                <S.Block3Items key={index}>
                  <a target="_blank" href={item.Image[0].path} rel="noreferrer">
                    <S.Block3ItemsImg
                      src={
                        item.Image.length > 0
                          ? item.Image[0].path
                          : "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius"
                      }
                    />
                  </a>
                  <S.Block3ItemsBottom>
                    <S.Block3ItemsTitle>
                      Contrbution Title: {item.title}
                    </S.Block3ItemsTitle>
                    <S.Block3ItemsAuthor>
                      Author: {item.user.name}
                    </S.Block3ItemsAuthor>
                  </S.Block3ItemsBottom>
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
            <S.EmtyItemText>There is no available contribution</S.EmtyItemText>
          )}
        </S.BottomBlockContainer>
      </S.BottomBlockLayout>
      <Footer />
    </>
  );
};

export default HomePage;
