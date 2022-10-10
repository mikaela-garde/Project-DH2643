import React, {useState} from 'react';
import ProfileView from "./ProfileView";

function TemplatePresenter (props) {
    const [isShown, setIsShown] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    return React.createElement(ProfileView)
}


export default TemplatePresenter;