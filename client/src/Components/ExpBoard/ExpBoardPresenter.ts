import React, {useEffect, useState} from 'react';
import ExpBoardView from "./ExpBoardView";
import { useNavigate } from "react-router-dom";
import useModelProp from '../../useModelProp';
import { experienceModel } from '../../app';
import NoDataGridView from '../NoDataGrid/NoDataGridView';
import {UserModel} from '../../app';


function ExpBoardPresenter () {
    const name = useModelProp(experienceModel, "name");
    const startTime = useModelProp(experienceModel, "start_time");
    const endTime = useModelProp(experienceModel, "end_time");
    const images = useModelProp(experienceModel, "posts_formatted");
    const [isLoading, setIsLoading] = useState(false);

    const [isShown, setIsShown] = useState(false);
    const [blur, setBlur] = useState(false);
    const [brightness, setBrightness] = useState(false);

    //Reset experience model on unmount
    useEffect(() => {
        return () => {
            experienceModel.clear();
        };
    }, []);
    
    return React.createElement(!name ? NoDataGridView: ExpBoardView, {
        name: name,
        startTime: startTime,
        endTime: endTime,
        showAddContent: () => {         
            setIsShown((current => !current));
            setBlur(current => !current),
            setBrightness(current => !current)
        },    
        isShown: isShown,
        blur: blur,
        brightness: brightness,
        images: images,
        isLoading: isLoading,
        setIsLoading: () => setIsLoading(current => !current)
    })
}


export default ExpBoardPresenter;