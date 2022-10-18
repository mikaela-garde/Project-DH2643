import React, {useState} from 'react';
import { UserModel } from '../../app';
import HeaderView from "./HeaderView";


function HeaderPresenter ({NavTitle}) {
    const profilePic = "" //Getta profilepic from databas

    return React.createElement(HeaderView,{
        NavTitle: NavTitle,
        ProfilePic : profilePic,
        onLogout: () => {
            UserModel.logoutUser();
        } 
        })
}


export default HeaderPresenter;

