import React from "react";
import * as S from "./CreateSubmission.styled";
import UploadSubmission from "./UploadSubmission/UploadSubmission";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";

const CreateSubmission = () => {
  return (
    <>
      <Header />
      <S.Layout>
        <S.Container>
          <S.Block1>
            <S.MainTitle>New Submission</S.MainTitle>
            <S.Description>
              Enter your submission title and also some necessary files that
              come with your submission.
            </S.Description>
          </S.Block1>
          <S.Block2>
            <S.LeftTile>Submission Title:</S.LeftTile>
            <S.Block2RightInput>
              <input type="text" placeholder="Enter your title here" />
            </S.Block2RightInput>
          </S.Block2>
          <S.Block3>
            <S.LeftTile>Files Submission:</S.LeftTile>
            <S.Block3Right>
              <UploadSubmission />
            </S.Block3Right>
          </S.Block3>
          <S.ButtonContainer>
            <S.Buttons>
              <S.SaveBtn>Save</S.SaveBtn>
              <S.CancelBtn>Cancel</S.CancelBtn>
            </S.Buttons>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
      <Footer />
    </>
  );
};

export default CreateSubmission;
