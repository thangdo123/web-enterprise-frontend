import React, { useEffect } from "react";
import * as S from "./Notification.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchNotifications } from "../../../store/slices/Coordinator/coodinatorContribution";

const Notification = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  const { notifications } = useSelector(
    (state: RootState) => state.coordinatorContributionState,
  );

  return (
    <S.Container>
      {notifications && notifications.map((value, index) => (
        <S.NotiItems key={index}><i className="bi bi-arrow-bar-right"></i>{value.content}</S.NotiItems>
      ))}
    </S.Container>
  );
};

export default Notification;
