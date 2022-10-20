import React, {useState, useEffect} from 'react';
import { UserModel } from '../../app';
import HeaderView from "./HeaderView";

function HeaderPresenter ({NavTitle}) {
    const [darkMode, setDarkMode] = useState(UserModel.dark_mode);

    const handleModeChange = changeBool => {
        setDarkMode(changeBool);
        UserModel.setDarkMode(changeBool);
        console.log("Dett här är i headerpresenter: " + UserModel.dark_mode);
    }
    const profilePic = "" //Getta profilepic from databas
    const [backButtonVis, setBackButtonVis] = useState(true);
    useEffect(() => {
        if (window.location.hash == "#/") {
            setBackButtonVis(false);
        } else {
            setBackButtonVis(true);
        }
    });

    return React.createElement(HeaderView,{
        NavTitle: NavTitle,
        ProfilePic : profilePic,
        darkMode: darkMode,
        setDarkMode: setDarkMode,
        handleModeChange: handleModeChange,
        onLogout: () => {
            UserModel.logoutUser();
        },
        backButtonVis: backButtonVis
    })
        
}


export default HeaderPresenter;

