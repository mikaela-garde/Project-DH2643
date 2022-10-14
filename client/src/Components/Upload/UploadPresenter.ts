import React, {useState} from 'react';
import UploadView from "./UploadView";
import { ThemeContext } from 'styled-components';


function TemplatePresenter (props) {
  const [text, setText] = useState(""); 
  //isActive = Media blue, Text White
  const [isActive, setIsActive] = useState(true);
  console.log("hello"+text);

  return React.createElement(UploadView, {
      isActive: isActive, 
      setIsActive: setIsActive,
      text: text,
      setText: setText
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