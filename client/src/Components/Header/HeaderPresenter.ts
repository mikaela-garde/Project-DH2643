import React, {useState, useEffect} from 'react';
import { UserModel } from '../../app';
import HeaderView from "./HeaderView";

function HeaderPresenter ({NavTitle}) {
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
        onLogout: () => {
            UserModel.logoutUser();
        },
        backButtonVis: backButtonVis, 
    })
}


export default HeaderPresenter;

