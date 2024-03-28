import React, { useEffect, useRef, useState } from "react";
import * as S from "./UploadSubmission.styled";

const UploadSubmission = ({handleImageFiles}: {handleImageFiles: (imageFiles : File[])=>void}) => {
  const [files, setFiles] = useState<File[]>([]);
  

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = e.dataTransfer.files;
    setFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = e.target.files;
      setFiles((prevFiles) => [...prevFiles, ...Array.from(newFiles)]);
     
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prevFile => {
      const updateFiles = [...prevFile];
      updateFiles.splice(index, 1);
      return updateFiles;
    });
  };

  useEffect(()=>{
    handleImageFiles(files);
  }, [ files]);

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
        {files &&
          Array.from(files).map((file, index) => (
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
