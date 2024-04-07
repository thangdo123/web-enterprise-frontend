import React from "react";
import * as S from "./ChosenContributionDetail.styled";
import { IChosenContribution } from "../../../../interfaces/chosenContribution";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { publishContribution } from "../../../../store/slices/Manager/chosenContributions";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

interface IChosenContributionDetailProps {
  chosenContribution: IChosenContribution;
  onClose: () => void;
}

export default function ChosenContributionDetail({
  chosenContribution,
  onClose,
}: IChosenContributionDetailProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handlePublishSubmission = () => {
    dispatch(publishContribution({ Id: chosenContribution.id }));
    dispatch(
      setNotification({
        message: "The post is published successfully",
        type: ENotificationType.Success,
      }),
    );
    onClose();
  };
  return (
    <S.Layout>
      {chosenContribution && (
        <S.Container>
          <S.Block1>
            <S.BoldTitle>Submission Details</S.BoldTitle>
          </S.Block1>
          <S.Block2>
            <S.Block2Row>
              <S.LeftTitle>Files submission</S.LeftTitle>

              <S.FileList>
                {chosenContribution.Image.map((value, index) => (
                  <S.FileItem key={index} href={value.path}>
                    <i className="bi bi-paperclip"></i>
                    <S.FileName>{value.name}</S.FileName>
                  </S.FileItem>
                ))}
                {chosenContribution.Documents.map((value, index) => (
                  <S.FileItem key={index} href={value.path}>
                    <i className="bi bi-paperclip"></i>
                    <S.FileName>{value.name}</S.FileName>
                  </S.FileItem>
                ))}
              </S.FileList>
            </S.Block2Row>
          </S.Block2>
          <S.ButtonGroup>
            <div>
              {!chosenContribution.is_public && (
                <S.ReturnBtn onClick={handlePublishSubmission}>
                  Publish
                </S.ReturnBtn>
              )}
              <S.DeleteBtn onClick={onClose}>Return</S.DeleteBtn>
            </div>
          </S.ButtonGroup>
        </S.Container>
      )}
    </S.Layout>
  );
}
