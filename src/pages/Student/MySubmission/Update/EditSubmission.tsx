import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./EditSubmission.styled";
import UploadSubmission from "./UploadSubmission/UploadSubmission";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import {
  editContribution,
  fetchContributionDetail,
} from "../../../../store/slices/Student/contribution";
import { useNavigate, useParams } from "react-router-dom";

const EditSubmission = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchContributionDetail(id!));
  }, []);

  const { detailContribution } = useSelector(
    (state: RootState) => state.contributionState,
  );
  console.log(detailContribution);
  const [titleInput, setTitleInput] = useState<string>(
    detailContribution.contribution.title,
  );
  const [description, setDescription] = useState<string>(
    detailContribution.contribution.description,
  );
  const [Files, setFiles] = useState<File[]>([]);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(titleInput);
    console.log(description);
    console.log(Files);
    formData.append("title", titleInput);
    formData.append("description", description);
    Files.forEach((item) => {
      formData.append("files", item);
    });
    console.log(formData.get("files"));
    if (id) {
      dispatch(editContribution({ id, formData }));
      navigate("/viewsubmission");
    } else {
      console.log(id);
    }
  };

  const handleResetForm = () => {
    setTitleInput("");
    setDescription("");
  };

  return (
    <>
      <S.Layout onSubmit={handleOnSubmit}>
        <S.Container>
          <S.Block1>
            <S.MainTitle>Edit Submission</S.MainTitle>
            <S.Description>
              Enter your submission title and also some necessary files that
              come with your submission.
            </S.Description>
          </S.Block1>
          <S.Block2>
            <S.LeftTile>Submission Title:</S.LeftTile>
            <S.Block2RightInput>
              <input
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
                type="text"
                placeholder="Enter your title here"
              />
            </S.Block2RightInput>
          </S.Block2>
          <S.Block3>
            <S.LeftTile>Files Submission:</S.LeftTile>
            <S.Block3Right>
              <UploadSubmission handleImageFiles={setFiles} />
            </S.Block3Right>
          </S.Block3>
          <S.Block4>
            <S.LeftTile>Submission Title:</S.LeftTile>
            <S.Block4RightTxtArea>
              <textarea
                cols={10}
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </S.Block4RightTxtArea>
          </S.Block4>
          <S.ButtonContainer>
            <S.Buttons>
              <S.SaveBtn type="submit">Save</S.SaveBtn>
              <S.CancelBtn type="button" onClick={handleResetForm}>
                Cancel
              </S.CancelBtn>
            </S.Buttons>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default EditSubmission;
