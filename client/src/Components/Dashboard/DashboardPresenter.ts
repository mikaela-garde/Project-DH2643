import React, {useState} from 'react';
import DashboardView from "./DashboardView";
import {UserModel} from "../../app";
import { useNavigate } from "react-router-dom";
function DashboardPresenter (props) {
    const navigate = useNavigate();
    return React.createElement(DashboardView, {
        toCreateExp: () => {
            navigate("/create-exp")
        },
    })
}


export default DashboardPresenter;