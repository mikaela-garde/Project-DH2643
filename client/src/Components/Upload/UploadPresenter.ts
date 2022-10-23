import React, {useState} from 'react';
import UploadView from "./UploadView";
import {uploadAPI} from "../../webAPI/webAPI";
import { v4 as uuid } from 'uuid';
import { experienceModel } from "../../app"

function TemplatePresenter ({showAdd}) {
  //isActive = Media blue, Text White
  const [isActive, setIsActive] = useState(true);
  
  const [text, setText] = useState(""); 

  const fileTypes = ["JPG", "PNG"];

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

  const uploadImage = (file) => {
   

    let formData = new FormData();

    //Konvertera token till JSON för att lägga in i formdata
    let token = localStorage.getItem("refreshToken")
    const tokenJSON = JSON.stringify(token);
    const tokenBlob = new Blob([tokenJSON], {
      type: 'application/json'
    });
    formData.append("token", tokenBlob);

    //Appenda experience id
    let expId= experienceModel.id
    const expIdJSON = JSON.stringify(expId);
    const expIdBlob = new Blob([expIdJSON], {
      type: 'application/json'
    });
    formData.append("expId", expIdBlob);
    
    //Appenda experience id
    let date= file.lastModifiedDate
    const dateJSON = JSON.stringify(date);
    const dateBlob = new Blob([dateJSON], {
      type: 'application/json'
    });
    formData.append("date", dateBlob);

    console.log(text)
    let caption = text
    const captionJSON = JSON.stringify(caption);
    const captionBlob = new Blob([captionJSON], {
      type: 'application/json'
    });
    formData.append("caption", captionBlob);
    
    let uploadId = uuid();
    //Skapar en blob så at vi kan byta namn till unikt id
    let blob = file.slice(0, file.size, "image/jpeg");
    let newFile = new File([blob], `${uploadId}`, { type: "image/jpeg" });
    // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
    formData.append("imgfile", newFile);
  
    uploadAPI(formData)
  }

  return React.createElement(UploadView, {
      isActive: isActive, 
      setIsActive: setIsActive,
      setText: (input) => setText(input),
      handleFileChange: handleFileChange,
      uploadImage: () => uploadImage(file),
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