import React, {  useRef,  } from "react";
import * as S from "./UploadSubmission.styled";

const UploadSubmission = ({ handleImageFiles, propFiles }: { handleImageFiles: (imageFiles: File[]) => void, propFiles: File[] }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files) as File[];
    handleImageFiles([...propFiles, ...newFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files) as File[];
      handleImageFiles([...propFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updateFiles = [...propFiles];
    updateFiles.splice(index, 1);
    handleImageFiles(updateFiles);
  };

  return (
    <S.Container >
      <S.UploadingFileArea onDragOver={handleDragOver} onDrop={handleDrop}>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          hidden
          ref={inputRef}
        />
        <S.UploadIcon>
          <i
            className="bi bi-box-arrow-in-down"
            onClick={() => inputRef.current?.click()}
          ></i>
        </S.UploadIcon>
        <h3>Click or drag files to this area to upload.</h3>
        <S.UploadDescription>
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </S.UploadDescription>
      </S.UploadingFileArea>
      <S.UploadedFilesArea>
        {propFiles &&
          Array.from(propFiles).map((file, index) => (
            <S.FileItems key={index}>
              <S.LeftIcon>
                <i className="bi bi-paperclip"></i>
              </S.LeftIcon>
              <S.Filename>{file.name}</S.Filename>
              <S.DeleteBtn onClick={() => {handleRemoveFile(index);}}>
                <i className="bi bi-trash3-fill"></i>
              </S.DeleteBtn>
            </S.FileItems>
          ))}
      </S.UploadedFilesArea>
    </S.Container>
  );
};

export default UploadSubmission;
