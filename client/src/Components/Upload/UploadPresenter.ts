import React, {useState} from 'react';
import UploadView from "./UploadView";

function TemplatePresenter (props) {
  //isActive = Media blue, Text White
  const [isActive, setIsActive] = useState(true);
  
  const [text, setText] = useState(""); 

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

  return React.createElement(UploadView, {
      isActive: isActive, 
      setIsActive: setIsActive,
      setText: (input) => setText(input),
      handleFileChange: handleFileChange,
      fileTypes: fileTypes,
      fileName: fileName,
      fileError: fileError
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