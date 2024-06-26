import React, { FormEvent, useState } from "react";
import * as S from "./CreateSubmission.styled";
import UploadSubmission from "./UploadSubmission/UploadSubmission";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { createContribution } from "../../../../store/slices/Student/contribution";
import { useNavigate } from "react-router-dom";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

const CreateSubmission = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [titleInput, setTitleInput] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [Files, setFiles] = useState<File[]>([]);
  const navigate = useNavigate();

  const handleOnSubmit = (e: FormEvent) => {
    const formData = new FormData();
    e.preventDefault();
    console.log(titleInput);
    console.log(description);
    console.log(Files);
    formData.append("title", titleInput);
    formData.append("description", description);
    Files.forEach((item) => {
      formData.append("files", item);
    });
    console.log(formData.get("files"));
    dispatch(createContribution(formData))
      .unwrap()
      .then((action) => {
        navigate("/viewsubmission");
        dispatch(
          setNotification({
            message: action.message,
            type: ENotificationType.Success,
          }),
        );
      })

      .catch((message) => {
        dispatch(
          setNotification({
            message: message,
            type: ENotificationType.Error,
          }),
        );
      });
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
            <S.MainTitle>New Submission</S.MainTitle>
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
            <S.LeftTile>Submission Description:</S.LeftTile>
            <S.Block4RightTxtArea>
              <textarea
                cols={10}
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </S.Block4RightTxtArea>
          </S.Block4>
          <S.Block5>
            <S.LeftTile></S.LeftTile>
            <S.CheckBoxContainer>
              <S.CheckBox type="checkbox" required />
              <div>
                I accept the terms and conditions before I provide my work.
              </div>
            </S.CheckBoxContainer>
          </S.Block5>
          <S.ButtonContainer>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.CancelBtn type="button" onClick={handleResetForm}>
              Clear
            </S.CancelBtn>
            <S.ReturnBtn type="button" onClick={() => navigate("/")}>
              Return
            </S.ReturnBtn>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default CreateSubmission;
