import React, {useState} from 'react';
import useModelProp from '../../useModelProp';
import {experienceModel, UserModel} from "../../app";
import GridView from "./GridView";
import NoDataGridView from '../NoDataGrid/NoDataGridView';

function GridPresenter (props) {
    const experiences = useModelProp(UserModel, "experiences");
    const [expShort, setExpShort] = useState<any[]>();
    experienceModel.getExpSummary(experiences).then((res) => {setExpShort(res)});
    //UserModel.getExpExtended().then((value) => setSummary(value));
    const ExpList = [{title: "hej", date: "datum", img: "bild"}];

    return React.createElement(expShort ? GridView: NoDataGridView,{
       summary : expShort,
       onSelect: (id) => experienceModel.listenToExperienceData(id)
    });
}


export default GridPresenter;