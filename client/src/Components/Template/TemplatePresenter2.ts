import React, {useState} from 'react';
import TemplateView from "./TemplateView2";
import { uploadAPI } from "../../webAPI/webAPI";
/*
function TemplatePresenter (props) {
    const [isShown, setIsShown] = useState(false);
    const [colorChange, setColorChange] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    
    const inputFile = document.getElementById("input").addEventListener("change", handleFiles, false);

    return React.createElement(TemplateView, {
      onToggle: () =>  setIsShown(current => !current),
      onColorChange: () => setColorChange(current => !current),
      isShown: isShown,
      colorChange: colorChange,
      onUpload: () => setInputFile(inputFile)


    })
}

function Upload(inputFile) {
    let postid = "hejsanBild123";
    console.log("hittar submitbutton")
    let inputElem = inputFile;
    let file = inputElem.files[0];
    
    // Create new file so we can rename the file
    let blob = file.slice(0, file.size, "image/jpeg");
    let newFile = new File([blob], `${postid}_post.jpeg`, { type: "image/jpeg" });
    
    // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
    let formData = new FormData();
    formData.append("imgfile", newFile);
    uploadAPI(formData)//.then((res) => res.text()).then((x) => console.log(x));
      //.then(loadPosts());
};


export default TemplatePresenter;*/