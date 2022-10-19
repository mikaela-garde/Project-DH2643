import React, {useState} from 'react';
import DashboardView from "./ExpBoardView";
import { useNavigate } from "react-router-dom";
function ExpBoardPresenter (props) {
    const ExpName = "Experience Name" // ÄNDRA TILL props.EXP namnet
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [blur, setBlur] = useState(false);
    const [brightness, setBrightness] = useState(false);
    return React.createElement(DashboardView, {
        ExpName: ExpName,
        showAddContent: () => {
            setIsShown((current => !current));
            setBlur(current => !current),
            setBrightness(current => !current)
        },
        isShown: isShown,
        blur: blur,
        brightness: brightness
    })
}


export default ExpBoardPresenter;