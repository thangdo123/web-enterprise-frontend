import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import * as S from "./ViewMySubmission.styled";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Card from "../../../components/Card/Card";

const dropdownItems = [{ value: "Lastest" }, { value: "Oldest" }];
const title = "Sort";
const submissionArr = [
  {
    imgUrl:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://as1.ftcdn.net/v2/jpg/01/63/11/70/1000_F_163117064_syJkTuCddASYjvl4WqyRmnuy8cDXpoQY.jpg",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTQwNjAwL29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNzIxOTA3OTI1fQ.apcFvMVkgfEL4zUFQZ-VqqLTxkB9lBQGB6CkHwWljD4/img.jpg?width=742&quality=85",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTQwNjAwL29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNzIxOTA3OTI1fQ.apcFvMVkgfEL4zUFQZ-VqqLTxkB9lBQGB6CkHwWljD4/img.jpg?width=742&quality=85",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTQwNjAwL29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNzIxOTA3OTI1fQ.apcFvMVkgfEL4zUFQZ-VqqLTxkB9lBQGB6CkHwWljD4/img.jpg?width=742&quality=85",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTQwNjAwL29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNzIxOTA3OTI1fQ.apcFvMVkgfEL4zUFQZ-VqqLTxkB9lBQGB6CkHwWljD4/img.jpg?width=742&quality=85",
    cardTitle: "Aasdasd",
  },
];

const ViewMySubmission = () => {
  return (
    <>
      <Header />
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
          <S.Block2>
            <S.Block2Title>Recently accessed submissions</S.Block2Title>
            <S.Block2SubmissionList>
              {submissionArr.map((item, index) => (
                <S.Block2SubmissionItemsContainer key={index}>
                  <Card imgUrl={item.imgUrl} cardTitle={item.cardTitle} />
                </S.Block2SubmissionItemsContainer>
              ))}
            </S.Block2SubmissionList>
          </S.Block2>
          <S.Block3>
            <S.Block3Title>My Submission List</S.Block3Title>
            <S.Block3Top>
              <S.Block3TopLeft>
                <S.Block3Sort>
                  <Dropdown
                    onClick={() => console.log("Cliked")}
                    title={title}
                    optionList={dropdownItems}
                  />
                </S.Block3Sort>
                <S.Block3Date>
                  Due Date: Thursday, 16 April 2023, 11:00 PM
                </S.Block3Date>
              </S.Block3TopLeft>
              <S.Block3TopRight>
                <button>Add Submission</button>
              </S.Block3TopRight>
            </S.Block3Top>
            <S.Block3SubmissionList>
              {submissionArr.map((item, index) => (
                <S.Block3SubmissionItemsContainer key={index}>
                  <Card imgUrl={item.imgUrl} cardTitle={item.cardTitle} />
                </S.Block3SubmissionItemsContainer>
              ))}
            </S.Block3SubmissionList>
            <S.Block3Bottom>
              <button>Load more</button>
            </S.Block3Bottom>
          </S.Block3>
        </S.Container>
      </S.Layout>
      <Footer />
    </>
  );
};

export default ViewMySubmission;
