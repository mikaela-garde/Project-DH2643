import React, {useState, useEffect} from 'react';
import NoPageView from "./NoPageView";
import {UserModel} from "../../app";
import useModelProp from "../../useModelProp";

function NoPagePresenter (props) {
    return  React.createElement(NoPageView);
}


export default NoPagePresenter;