import React, {useState} from 'react';
import DashboardView from "./ExpBoardView";

function ExpBoardPresenter (props) {
    const ExpName = "hej" // ÄNDRA TILL props.EXP namnet
    return React.createElement(DashboardView, {
        ExpName: ExpName
    })
}


export default ExpBoardPresenter;