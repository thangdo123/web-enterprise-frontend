import React, { useEffect, useState } from "react";
import * as S from "./Homepage.styled";
// import Dropdown from "../../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  fetchAllContributionsByFaculty,
  fetchNotificationCount,
} from "../../store/slices/Coordinator/coodinatorContribution";
import { Loader } from "../../components/Loader/Loader.styled";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate } from "react-router";
import Notification from "./Notification/Notification";
import BlackIMG from "../../assets/images/unset.png";

// const dropdownItems = [{ value: "Lastest" }, { value: "Oldest" }];
// const dropdownTitle = "Sort";

const Homepage = () => {
  const seenNotifications = localStorage.getItem("seenNotifications");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllContributionsByFaculty());
    dispatch(fetchNotificationCount());
    const interval = setInterval(() => {
      dispatch(fetchNotificationCount());
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const [totalPage, setTotalPage] = useState<number>();
  const [page, setPage] = useState<number>(0);

  const { allMyContributions, isLoading, count } = useSelector(
    (state: RootState) => state.coordinatorContributionState,
  );

  const navigate = useNavigate();
  const navigateContributionDetail = (id: string) => navigate(`${id}`);

  useEffect(() => {
    setPage((prevPage) =>
      Math.min(Math.max(prevPage, 0), allMyContributions.length - 1),
    );
    setTotalPage(allMyContributions.length);
  }, [page, allMyContributions.length]);

  //notification
  const [isOpenNoti, setOpenNoti] = useState(false);
  // const [notificationCount, setNotificationCount] = useState(count);
  // console.log(notificationCount);
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
        {isLoading ? (
          <Loader />
        ) : allMyContributions && allMyContributions[page] ? (
          <S.Block3>
            {allMyContributions[page].map((item, index) => (
              <S.Block3Items
                key={index}
                onClick={() => navigateContributionDetail(item.id!)}
              >
                <S.ItemImage
                  src={
                    item.Image.length > 0
                      ? item.Image[0].path
                      : BlackIMG
                  }
                />
                <S.ItemBottomBlock>
                  <S.ItemTitle>{item.title}</S.ItemTitle>
                  <S.ItemStatus $isChosen={item.is_choosen!}>
                    {item.is_choosen ? "Selected" : "Not Selected"}
                  </S.ItemStatus>
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
          <S.EmtyItemText>There is no available contribution</S.EmtyItemText>
        )}
      </S.Container>
      <S.NotificationBtn
        onClick={() => {
          setOpenNoti(!isOpenNoti);
          localStorage.setItem("seenNotifications", `${count}`);
        }}
      >
        <i className="bi bi-bell-fill"></i>
      </S.NotificationBtn>
      <S.NotificationCount>
        {seenNotifications && count
          ? count - parseInt(seenNotifications!)
          : count}
      </S.NotificationCount>
      {isOpenNoti ? <Notification /> : ""}
    </S.Layout>
  );
};

export default Homepage;
