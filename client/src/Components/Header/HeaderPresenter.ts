import React, {useState} from 'react';
import HeaderView from "./HeaderView";
import {UserModel} from "../../app";



function HeaderPresenter ({NavTitle}) {
    const profilePic = "" //Getta profilepic from databas    

    const [darkMode, setDarkMode] = useState(UserModel.dark_mode);

    const handleModeChange = changeBool => {
        setDarkMode(changeBool);
        UserModel.setDarkMode(changeBool);
        console.log("Dett här är i headerpresenter: " + UserModel.dark_mode);
    }

    return React.createElement(HeaderView,{
        NavTitle: NavTitle,
        ProfilePic : profilePic,
        darkMode: darkMode,
        setDarkMode: setDarkMode,
        handleModeChange: handleModeChange
        })
}


export default HeaderPresenter;

