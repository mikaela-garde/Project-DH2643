import React, {useState} from 'react';
import HeaderView from "./HeaderView";


function HeaderPresenter ({NavTitle}) {
    const profilePic = "" //Getta profilepic from databas

    return React.createElement(HeaderView,{
        NavTitle: NavTitle,
        ProfilePic : profilePic
        })
}


export default HeaderPresenter;

