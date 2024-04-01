import React, { useEffect } from "react";
import * as S from "./SubmissionDeatil.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchContributionDetail } from "../../../../store/slices/Student/contribution";
import { useParams } from "react-router";

const SubmissionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchContributionDetail(id!));
  }, []);
  const { detailContribution } = useSelector(
    (state: RootState) => state.contributionState,
  );

  const closureDate = new Date(detailContribution.academicYear.closure_date);
  const closureDate_day = closureDate.getDate();
  const closureDate_month = closureDate.getMonth() + 1;
  const closureDate_year = closureDate.getFullYear();
  const closureDate_hours = closureDate.getHours();
  const closureDate_minutes = closureDate.getMinutes();
  const closureDate_formattedDay =
    closureDate_day < 10 ? "0" + closureDate_day : closureDate_day;
  const closureDate_formattedMonth =
    closureDate_month < 10 ? "0" + closureDate_month : closureDate_month;
  const closureDate_formattedHours =
    closureDate_hours < 10 ? "0" + closureDate_hours : closureDate_hours;
  const closureDate_formattedMinutes =
    closureDate_minutes < 10 ? "0" + closureDate_minutes : closureDate_minutes;

  const formattedClosureDate = `${closureDate_formattedDay}/${closureDate_formattedMonth}/${closureDate_year} at ${closureDate_formattedHours}:${closureDate_formattedMinutes}`;

  const CreateDate = new Date(detailContribution.contribution.createdAt);
  const CreateDate_day = CreateDate.getDate();
  const CreateDate_month = CreateDate.getMonth() + 1;
  const CreateDate_year = CreateDate.getFullYear();
  const CreateDate_hours = CreateDate.getHours();
  const CreateDate_minutes = CreateDate.getMinutes();
  const CreateDate_formattedDay =
    CreateDate_day < 10 ? "0" + CreateDate_day : CreateDate_day;
  const CreateDate_formattedMonth =
    CreateDate_month < 10 ? "0" + CreateDate_month : CreateDate_month;
  const CreateDate_formattedHours =
    CreateDate_hours < 10 ? "0" + CreateDate_hours : CreateDate_hours;
  const CreateDate_formattedMinutes =
    CreateDate_minutes < 10 ? "0" + CreateDate_minutes : CreateDate_minutes;

  const formattedCreateDate = `${CreateDate_formattedDay}/${CreateDate_formattedMonth}/${CreateDate_year} at ${CreateDate_formattedHours}:${CreateDate_formattedMinutes}`;
  return (
    <S.Layout>
      <S.Container>
        <S.Block1>
          <S.BoldTitle>Submission Details</S.BoldTitle>
          <S.Block1Description>
            Here you can see all the information of the submissions that you
            selected and also the feedback status
          </S.Block1Description>
        </S.Block1>
        <S.Block2>
          <S.Block2Row>
            <S.LeftTitle>Submission title</S.LeftTitle>
            {detailContribution && detailContribution.contribution.title && (
              <S.Block2RightText>
                {detailContribution.contribution.title}
              </S.Block2RightText>
            )}
          </S.Block2Row>
          <S.Block2Row>
            <S.LeftTitle>Description</S.LeftTitle>
            <S.Block2RightText>
              {detailContribution.contribution.description}
            </S.Block2RightText>
          </S.Block2Row>
          <S.Block2Row>
            <S.LeftTitle>Due date</S.LeftTitle>
            <S.Block2RightText>{formattedClosureDate}</S.Block2RightText>
          </S.Block2Row>
          <S.Block2Row>
            <S.LeftTitle>Last modified</S.LeftTitle>
            <S.Block2RightText>{formattedCreateDate}</S.Block2RightText>
          </S.Block2Row>
          <S.Block2Row>
            <S.LeftTitle>Files submission</S.LeftTitle>
            <S.FileList>
              {detailContribution.image.map((value, index) => (
                <S.FileItem key={index}>
                  <i className="bi bi-paperclip"></i>
                  <S.FileName>{value.name}</S.FileName>
                </S.FileItem>
              ))}
              {detailContribution.document.map((value, index) => (
                <S.FileItem key={index}>
                  <i className="bi bi-paperclip"></i>
                  <S.FileName>{value.name}</S.FileName>
                </S.FileItem>
              ))}
            </S.FileList>
          </S.Block2Row>
          <S.Block2Row>
            <S.LeftTitle>Feedback comments</S.LeftTitle>
            <S.CommentList>
              {detailContribution.comment[0] === undefined ? (
                <S.CommentItem>
                  There is no comment for this contribution
                </S.CommentItem>
              ) : (
                detailContribution.comment.map((value, index) => (
                  <S.CommentItem key={index}>- {value.content}</S.CommentItem>
                ))
              )}
            </S.CommentList>
          </S.Block2Row>
        </S.Block2>
        <S.ButtonGroup>
          <div>
            <S.ReturnBtn>Return</S.ReturnBtn>
            <S.DeleteBtn>Remove submission</S.DeleteBtn>
          </div>
        </S.ButtonGroup>
      </S.Container>
    </S.Layout>
  );
};

export default SubmissionDetail;
