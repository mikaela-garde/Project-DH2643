import React, {useState} from 'react';
import useModelProp from '../../useModelProp';
import {UserModel} from '../../app';
import ProfileView from "./ProfileView";

function TemplatePresenter (props) {
    const first_name = useModelProp(UserModel, "first_name");
    const last_name = useModelProp(UserModel, "last_name");
    const userProfilePic = 0;
    const userName = 0;
    const userSocialMedia = 0;
    const userAbout = 0;
    const userExperienceList = 0;



    return React.createElement(ProfileView, {
        firstName: first_name,
        lastName: last_name
    }
        /*userProfilePic, 
        userName,
        userSocialMedia,
        userAbout,
        userExperienceList*/
        )
}


export default TemplatePresenter;