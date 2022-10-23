import React, {useState} from 'react';
import UploadView from "./UploadView";
import {uploadAPI} from "../../webAPI/webAPI";
import { v4 as uuid } from 'uuid';
import { experienceModel } from "../../app"
import {UserModel} from '../../app';

function TemplatePresenter ({showAdd, setIsLoading}) {
  //isActive = Media blue, Text White
  const [isActive, setIsActive] = useState(true);
  
  const [text, setText] = useState(""); 

  const fileTypes = ["JPG", "PNG", "JPEG"];

  const [file, setFile] = useState(new Image);

  const [fileName, setFileName] = useState("");

  const [fileError, setFileError] = useState("");

  const handleFileChange = (file) => {
    if(typeof file == "string") {
      setFileError(file);
    } else {
      setFile(file);
      setFileName(file.name);
      setFileError("");
      console.log(file.height);
    }
  };

  return React.createElement(UploadView, {
      isActive: isActive, 
      setIsActive: setIsActive,
      setText: (input) => setText(input),
      handleFileChange: handleFileChange,
      uploadImage: () => {
        experienceModel.uploadImage(file, text).then(() => setIsLoading());
        showAdd();
        setIsLoading();
      },
      fileTypes: fileTypes,
      fileName: fileName,
      fileError: fileError,
      showAdd: showAdd
      }
    )
}


export default TemplatePresenter;

/*
isActtive = ttrue, media är blå =vald
sttandardläge: media är blue
om onToggle = true, då ska man kunna klicka på Text men inte på media
om onToggle = false, så ska man kunna trycka på Media men intte på text
*/