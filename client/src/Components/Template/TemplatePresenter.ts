import React, {useState} from 'react';
import UploadView from "./TemplateView";
import {uploadAPI} from "../../webAPI/webAPI";

function TemplatePresenter (props) {
  //isActive = Media blue, Text White

  const fileTypes = ["JPG", "PNG", "HEIC", "MP3", "MP4", "MOV"];

  const [file, setFile] = useState("");

  const [fileName, setFileName] = useState("");

  const [fileError, setFileError] = useState("");

  const handleFileChange = (file) => {
    if(typeof file == "string") {
      setFileError(file);
    } else {
      setFile(file);
      setFileName(file.name);
      setFileError("");
    }
  };

  const uploadImage = (file) => {
    let postid = "hejsanBild123";
    
    // Create new file so we can rename the file
    let blob = file.slice(0, file.size, "image/jpeg");
    let newFile = new File([blob], `${postid}_post.jpeg`, { type: "image/jpeg" });
    
    // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
    let formData = new FormData();
    formData.append("imgfile", newFile);
  
    uploadAPI(formData)//.then((res) => res.text()).then((x) => console.log(x));
      //.then(loadPosts());
  }
    
    /*
    let inputElem = document.getElementById("imgfile");
    let file = inputElem.files[0];
    */
    
    
  return React.createElement(UploadView, {
      handleFileChange: handleFileChange,
      fileTypes: fileTypes,
      fileName: fileName,
      fileError: fileError,
      uploadImage: () => uploadImage(file)
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