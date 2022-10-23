import React, {useState} from 'react';
import useModelProp from '../../useModelProp';
import {experienceModel, UserModel} from "../../app";
import GridView from "./GridView";

function GridPresenter (props) {
    const summarys = useModelProp(UserModel, "summarys");
    //UserModel.getExpExtended().then((value) => setSummary(value));
    const ExpList = [{title: "hej", date: "datum", img: "bild"}];
    
    return React.createElement(GridView,{
       summary : summarys,
       onSelect: (id) => experienceModel.listenToExperienceData(id)
    });
}


export default GridPresenter;