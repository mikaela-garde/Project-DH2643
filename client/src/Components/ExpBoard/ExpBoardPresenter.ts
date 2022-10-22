import React, {useState} from 'react';
import DashboardView from "./ExpBoardView";
import { useNavigate } from "react-router-dom";
import useModelProp from '../../useModelProp';
import { experienceModel } from '../../app';


function ExpBoardPresenter () {
    const name = useModelProp(experienceModel, "name");
    const startTime = useModelProp(experienceModel, "start_time");
    const endTime = useModelProp(experienceModel, "end_time");
    const posts = useModelProp(experienceModel, "posts");

    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [blur, setBlur] = useState(false);
    const [brightness, setBrightness] = useState(false);
    return React.createElement(DashboardView, {
        name: name,
        startTime: startTime,
        endTime: endTime,
        posts: posts,
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