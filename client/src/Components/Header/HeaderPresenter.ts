import React, {useState, useEffect} from 'react';
import { UserModel } from '../../app';
import useModelProp from '../../useModelProp';
import HeaderView from "./HeaderView";

function HeaderPresenter ({NavTitle}) {
    const darkMode = useModelProp(UserModel, "dark_mode");
    
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
        handleModeChange: (changeBool) => UserModel.setDarkMode(changeBool),
        onLogout: () => {
            UserModel.logoutUser();
        },
        backButtonVis: backButtonVis
    })
        
}


export default HeaderPresenter;

