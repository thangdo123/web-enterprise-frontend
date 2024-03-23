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
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
    cardTitle: "Aasdasd",
  },
  {
    imgUrl:
      "https://play-lh.googleusercontent.com/YUBDky2apqeojcw6eexQEpitWuRPOK7kPe_UbqQNv-A4Pi_fXm-YQ8vTCwPKtxIPgius",
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
