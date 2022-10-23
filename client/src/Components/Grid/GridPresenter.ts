import React, {useState} from 'react';
import useModelProp from '../../useModelProp';
import {UserModel} from "../../app";
import GridView from "./GridView";

function GridPresenter (props) {
    const summarys = useModelProp(UserModel, "summarys");
    console.log("id i user model", UserModel.id);
    console.log("sumary", summarys);
    //UserModel.getExpExtended().then((value) => setSummary(value));
    const ExpList = [{title: "hej", date: "datum", img: "bild"}];
    
        // experienceModel.listenToExperienceData(exp.id)
    return React.createElement(GridView,{
       summary : summarys
    });
}


export default GridPresenter;