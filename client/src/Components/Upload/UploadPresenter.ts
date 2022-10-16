import React, {useState} from 'react';
import UploadView from "./UploadView";


function TemplatePresenter (props) {
  //isActive = Media blue, Text White
  const [isActive, setIsActive] = useState(true);
  
  const [text, setText] = useState(""); 

  const fileTypes = ["JPG", "PNG", "GIF"];

  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };



  return React.createElement(UploadView, {
      isActive: isActive, 
      setIsActive: setIsActive,
      setText: (input) => setText(input),
      handleChange: handleChange,
      fileTypes: fileTypes
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