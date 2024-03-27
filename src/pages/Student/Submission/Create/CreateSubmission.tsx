import React, { FormEvent, useState } from "react";
import * as S from "./CreateSubmission.styled";
import UploadSubmission from "./UploadSubmission/UploadSubmission";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { createContribution } from "../../../../store/slices/contribution";

const CreateSubmission = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [titleInput, setTitleInput] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);


  const handleOnSubmit = (e: FormEvent) => {
    const test = new FormData();
    e.preventDefault();
    console.log(titleInput);
    console.log(description);
    console.log(imageFiles);
    test.append("title", titleInput);
    test.append("description", description);
    imageFiles.forEach((item) => {
      test.append("files", item);
    });
    console.log(test.get("files"));
    dispatch(createContribution(test));
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
              <UploadSubmission handleImageFiles={setImageFiles}/>
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
              <S.SaveBtn>Save</S.SaveBtn>
              <S.CancelBtn>Cancel</S.CancelBtn>
            </S.Buttons>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default CreateSubmission;
