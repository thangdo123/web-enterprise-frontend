import React, { useEffect } from "react";
import * as S from "./ContributionDetail.styled";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchContributionDetail } from "../../../store/slices/Student/contribution";
import { AppDispatch, RootState } from "../../../store";

const ContributionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchContributionDetail(id!));
  }, []);
  const { detailContribution } = useSelector(
    (state: RootState) => state.contributionState,
  );

  const handleReturnPage = () => {
    navigate("/");
  };

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
            <S.LeftTitle>Files submission</S.LeftTitle>
            <S.FileList>
              {detailContribution.image.map((value, index) => (
                <S.FileItem key={index}>
                  <i className="bi bi-paperclip"></i>
                  <S.FileName href={value.path} target="_blank">
                    {value.name}
                  </S.FileName>
                </S.FileItem>
              ))}
              {detailContribution.document.map((value, index) => (
                <S.FileItem key={index}>
                  <i className="bi bi-paperclip"></i>
                  <S.FileName href={value.path} target="_blank">
                    {value.name}
                  </S.FileName>
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
          <S.ReturnBtn onClick={handleReturnPage}>Return</S.ReturnBtn>
        </S.ButtonGroup>
      </S.Container>
    </S.Layout>
  );
};

export default ContributionDetail;
