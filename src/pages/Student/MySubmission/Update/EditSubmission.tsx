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
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

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

  const convertToBlob = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  const createFileObject = async (url: string, filename: string) => {
    const blob = await convertToBlob(url);
    return new File([blob], filename);
  };

  const [Files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const existedFiles: File[] = [];

      if (detailContribution) {
        for (const image of detailContribution.image) {
          const imageFile = await createFileObject(image.path, image.name);
          existedFiles.push(imageFile);
        }

        for (const document of detailContribution.document) {
          const documentFile = await createFileObject(
            document.path,
            document.name,
          );
          existedFiles.push(documentFile);
        }
      }
      setFiles([...existedFiles]);
    };

    fetchFiles();
  }, [detailContribution]);

  console.log(Files);
  const [titleInput, setTitleInput] = useState<string>(
    detailContribution.contribution.title,
  );
  const [description, setDescription] = useState<string>(
    detailContribution.contribution.description,
  );

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
      dispatch(editContribution({ id, formData }))
        .unwrap()
        .then((action) => {
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
      navigate("/viewsubmission");
    } else {
      console.log(id);
    }
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
              <UploadSubmission handleImageFiles={setFiles} propFiles={Files} />
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
            <S.CancelBtn type="button" onClick={() => navigate(-1)}>
              Cancel
            </S.CancelBtn>
          </S.ButtonContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default EditSubmission;
